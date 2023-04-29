import axios from "axios";


export const sendOrder = async (body) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_TG_API}/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`
        const text = `🛍 Новый заказ

📚 Выпуск: ${body?.title}
👤 Имя Фамилия: ${body?.firstName || ''} ${body?.lastName || ''}
📞 Номер телефона: ${body?.phoneNumber}
${body?.email ? `✉️ Email: ${body?.email}` : ''}
        `

        const params = {
            chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
            parse_mode: "Markdown",
            text,
        }

        const { data } = await axios.post(url, params)
        return data
    } catch (error) {
        console.log(error);
    }
}