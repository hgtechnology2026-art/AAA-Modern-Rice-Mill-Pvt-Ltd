import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import phone from "@/assets/icon/Group.png"
import mail from "@/assets/icon/Group (1).png"
import loc from "@/assets/icon/location.png"
const contacts = [
  { img: phone, title: "Phone", value: "+91 9786 232 176" },
  { img: mail, title: "Mail", value: "anvar@aaamodernricemill.in" },
  { img: loc, title: "Location", value: "No: 3 Main Road Vikravandi..." },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Message sent successfully", {
      description: "Thank you for contacting us. We will get back to you soon.",
    });

    setFormData({ name: "", lastName: "", email: "", phone: "", message: "" });
  };

  const inputClass =
    "mt-1 w-full rounded-[6px] border border-[#dde5d8] bg-white px-4 py-3 text-[14px] text-[#2b2925] placeholder-[#b8bcae] focus:outline-none focus:ring-2 focus:ring-[#d4a43a]";
  const labelClass = "block text-[14px] font-bold text-[#2b2925]";

  return (
    <section id="contact" className="section-divider bg-white px-4 py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.52fr_1.08fr] md:items-start md:gap-12">
          <div className="pt-1">
            <p className="font-body mb-3 text-[18px] font-semibold text-[#6f855f]">Contact Us</p>
            <h2 className="font-heading text-[46px] font-bold leading-[54px] capitalize text-[#25231f]">
              Let&apos;s Build The
              <br />
              Future, Together!
            </h2>
            <p className="font-body mt-4 max-w-[360px] text-[15px] leading-[1.85] text-[#8b8a84]">
              Have a question or need assistance? Reach out to us-we&apos;re here to help!
            </p>

            <div className="mt-6 space-y-3">
              {contacts.map((contact, index) => (
                <div key={contact.title} className={`flex items-start gap-4 pb-3 ${index !== contacts.length - 1 ? "border-b border-[#efefe9]" : ""}`}>
                  <div className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-[6px] bg-[#C7D6C3]">
                    <img
                      src={contact.img}
                      alt={contact.title}
                      className="h-[24px] w-[24px] object-contain"
                    />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-heading text-[1.6rem] font-bold leading-none text-[#25231f] md:text-[2rem]">
                      {contact.title}
                    </h4>
                    <p className="font-body mt-2 max-w-[300px] text-[14px] leading-[1.8] text-[#5f6058]">
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[8px] bg-[#C7D6C3] p-6 md:p-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your Mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  placeholder="Message"
                  rows={8}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="btn-gold-gradient inline-flex items-center justify-center w-[196px] h-[56px] rounded-lg px-8 py-3 text-[16px] font-semibold text-[#2b2419]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
