const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const message = document.getElementById("message");
const email = document.getElementById("email");

const username = "rubenneven@gmail.com";
const password = "E298D8DC6765EF37D3E9FFBA52328AB9BDE1";
const apiKey = "F057C7516F210E8A987AAD65302A852F7F36B4F6EEBFB5FF43BD008E16BE56758EFED108C40D65B367A010756FAA6124";

async function sendEmail() {
    const bodyMessage = `Name: ${name.value} <br> Sender: ${email.value} <br> Message: ${message.value}`;

    const emailParams = {
        From: "ruben.neven.website@gmail.com",
        To: "ruben.neven.website@gmail.com",
        Subject: "Message from website",
        Body: bodyMessage,
    };

    try {
        const response = await Email.send({
            Host: "smtp.elasticemail.com",
            Username: username,
            Password: password,
            ApiKey: apiKey,
            ...emailParams,
        });

        alert(response);
    } catch (error) {
        console.error("Error sending email", error);
        alert("Error sending email. Please try again later.");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
