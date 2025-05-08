import nodemailer from "nodemailer";

// Configurar o transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface MensagemData {
  nome: string;
  email: string;
  telefone: string;
  opcao: string;
  mensagem: string;
}

// Número de WhatsApp formatado e mensagem codificada para URL
const whatsappNumber = "5511951783281";

const whatsappLink = `https://wa.me/${whatsappNumber}`;
export async function sendEmail(mensagemData: MensagemData) {
  // Verificar se as credenciais estão disponíveis
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Credenciais de email não configuradas");
    return {
      success: false,
      error: new Error("Credenciais de email não configuradas"),
    };
  }

  const { nome, email, telefone, opcao, mensagem } = mensagemData;

  // Email para o administrador (você)
  const adminMailOptions = {
    from: `"EntreLinhasJS" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
    subject: `Nova mensagem de ${nome} - ${opcao}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h1 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nova mensagem do site EntreLinhasJS</h1>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Nome:</strong> ${nome}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Telefone:</strong> ${telefone}</p>
          
          <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border-radius: 4px;">
            <p style="margin: 0 0 10px 0;"><strong>Mensagem:</strong></p>
            <p style="margin: 0; white-space: pre-line;">${mensagem}</p>
          </div>
        </div>
        
        <div style="margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 10px;">
          <p>Esta é uma notificação automática do site EntreLinhasJS.</p>
        </div>
      </div>
    `,
  };

  // Email para o cliente com cupom de desconto
  const clientMailOptions = {
    from: `"Nícollas Dias" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Obrigado pelo contato, ${nome}! Toma aqui um cupom de desconto!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #333; border-radius: 5px; background-color: #1a1a1a; color: #fff;">
        <h1 style="color: #FD6F00; border-bottom: 1px solid #333; padding-bottom: 10px;">Nícollas Dias</h1>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;">Olá <strong>${nome}</strong>,</p>
          <p style="margin: 10px 0;">Obrigado por entrar em contato conosco! Recebemos sua mensagem e retornaremos em breve.</p>
          
          <div style="margin: 30px 0; text-align: center; background-color: #2a2a2a; padding: 20px; border-radius: 8px; border: 1px solid #333;">
            <h2 style="color: #FD6F00; margin-bottom: 15px;">Enquanto aguarda o contato estou te presenteando com um cupom de 5% de desconto!</h2>
            <div style="background-color: #FD6F00; color: white; font-weight: bold; padding: 15px; border-radius: 5px; font-size: 20px; letter-spacing: 2px; box-shadow: 0 0 10px rgba(253, 111, 0, 0.5);">
              Nicollas5%
            </div>
            <p style="margin-top: 15px; font-size: 14px; color: #ccc;">Use este código na sua próxima compra em nossa loja.</p>
            <p style="margin-top: 15px; font-size: 14px; color: #ccc;">Entre em contato no nosso Whatsaap: <a href="${whatsappLink}" style="color: #FD6F00; text-decoration: none;">Clique aqui</a></p>
          </div>
          
          <p style="margin: 20px 0;">Estou ansioso para atendê-lo e trabalharmos juntos!</p>
          <p style="margin: 10px 0;">Atenciosamente,</p>
          <p style="margin: 10px 0;"><strong style="color: #FD6F00;">Equipe Nícollas Dias</strong></p>
        </div>
        
        <div style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #333; padding-top: 10px; text-align: center;">
          <p>© ${new Date().getFullYear()} Nícollas Dias. Todos os direitos reservados.</p>
          <p>Este é um email automático, por favor não responda.</p>
        </div>
      </div>
    `,
  };

  try {
    // Enviar email para o administrador
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log("Email para administrador enviado:", adminInfo.messageId);

    // Enviar email para o cliente
    const clientInfo = await transporter.sendMail(clientMailOptions);
    console.log("Email para cliente enviado:", clientInfo.messageId);

    return {
      success: true,
      adminMessageId: adminInfo.messageId,
      clientMessageId: clientInfo.messageId,
    };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return { success: false, error };
  }
}
