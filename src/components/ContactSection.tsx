import { useState } from "react";
import emailjs from "emailjs-com";
import phone from "@/assets/icon/Group.png";
import mail from "@/assets/icon/Group (1).png";
import loc from "@/assets/icon/location.png";
import Reveal from "@/components/Reveal";

const contacts = [
  { img: phone, title: "Phone", value: "+91 9786 232 176" },
  { img: mail, title: "Mail", value: "anvar@aaamodernricemill.in" },
  { img: loc, title: "Location", value: "No: 3 Main Road Vikravandi, Villupuram District, Tamilnadu, India-605652." },
];

const SERVICE_ID = "service_a1fhveq";
const TEMPLATE_ID = "template_lkkfzhb";
const PUBLIC_KEY = "1wq0jcO0dgpIAIhZv";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const commonData = {
      from_name: `${formData.name} ${formData.lastName}`.trim(),
      reply_to: formData.email,
      phone: formData.phone,
    };

    const adminParams = {
      ...commonData,
      to_email: "anvar@aaamodernricemill.in",
      subject: "New Enquiry Arrived 🚀",
      message: [
        "A new enquiry has been submitted.",
        "",
        `Name: ${`${formData.name} ${formData.lastName}`.trim()}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        "",
        "Message:",
        formData.message,
      ].join("\n"),
    };

    const userParams = {
      ...commonData,
      to_email: formData.email,
      subject: "Thanks for contacting us 🙏",
      message: [
        `Hi ${`${formData.name} ${formData.lastName}`.trim()},`,
        "",
        "Thank you for contacting A.A.A Modern Rice Mill Pvt Ltd.",
        "We have received your enquiry and our team will get back to you shortly.",
        "",
        "Warm regards,",
        "A.A.A Modern Rice Mill Pvt Ltd",
      ].join("\n"),
    };

    setIsSubmitting(true);

    Promise.all([
      emailjs.send(SERVICE_ID, TEMPLATE_ID, adminParams, PUBLIC_KEY),
      emailjs.send(SERVICE_ID, TEMPLATE_ID, userParams, PUBLIC_KEY),
    ])
      .then(() => {
        alert("Both emails were sent successfully.");
        setFormData({ name: "", lastName: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send email. Please try again.");
        setIsSubmitting(false);
      });
  };

  const wrapperStyle = {
    maxWidth: "720px",
    margin: "0",
    width: "100%",
  } as const;

  const formPanelStyle = {
    margin: "0 auto",
    borderRadius: "12px",
    background: "#c7d6c3",
    padding: "24px",
    boxShadow: "0 18px 38px rgba(102, 122, 88, 0.12)",
  } as const;

  const inputStyle = {
    marginTop: "6px",
    width: "100%",
    borderRadius: "6px",
    border: "1px solid #dde5d8",
    background: "#ffffff",
    padding: "12px 16px",
    fontSize: "14px",
    color: "#2b2925",
    outline: "none",
  } as const;

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: 700,
    color: "#2b2925",
  } as const;

  return (
    <section id="contact" className="section-divider bg-white px-4 py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-[1441px]">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-[1fr_2fr] md:items-start md:gap-[0px]">
          <Reveal direction="left" className="pt-1">
            <p className="font-body mb-3 text-[18px] font-semibold text-[#6f855f]">Contact Us</p>
            <h2 className="font-heading text-[46px] font-bold leading-[54px] capitalize text-[#25231f]">
              Let&apos;s Build The
              <br />
              Future, Together!
            </h2>
            <p className="font-body mt-4 max-w-[360px] text-[16px] leading-[1.85] text-[#8b8a84]">
              Have a question or need assistance? Reach out to us-we&apos;re here to help!
            </p>

            <div className="mt-6 space-y-3">
              {contacts.map((contact, index) => (
                <Reveal key={contact.title} delay={index * 90} className={`flex items-start gap-4 pb-3 ${index !== contacts.length - 1 ? "border-b border-[#efefe9]" : ""}`}>
                  <div className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-[6px] bg-[#C7D6C3]">
                    <img
                      src={contact.img}
                      alt={contact.title}
                      className="h-[24px] w-[24px] object-contain"
                    />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-body text-[24px] font-medium leading-none text-[#25231f] md:text-[2rem]">
                      {contact.title}
                    </h4>
                    <p className="font-body mt-2 max-w-[300px] text-[16px] leading-[1.8] text-[#5f6058]">
                      {contact.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140} direction="right" style={wrapperStyle}>
            <div className="w-full md:w-[947px] md:max-w-[960px]" style={formPanelStyle}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Reveal delay={40}>
                  <div>
                  <label style={labelStyle}>
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div>
                  <label style={labelStyle}>
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Your Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    style={inputStyle}
                  />
                  </div>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Reveal delay={160}>
                  <div>
                  <label style={labelStyle}>
                    Mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                  </div>
                </Reveal>
                <Reveal delay={220}>
                  <div>
                  <label style={labelStyle}>
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                  />
                  </div>
                </Reveal>
              </div>

              <Reveal delay={280}>
                <div>
                <label style={labelStyle}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  rows={8}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                />
                </div>
              </Reveal>

              <Reveal delay={340}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold-gradient inline-flex h-[56px] w-[196px] items-center justify-center rounded-lg px-8 py-3 text-[16px] font-semibold text-[#2b2419] transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </Reveal>
            </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
