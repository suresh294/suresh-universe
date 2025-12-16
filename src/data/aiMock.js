// src/data/aiMock.js
export const getMockResponse = (message) => {
  const lower = message.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hello there! I'm Zynox, your AI guide through Sureshkumar’s portfolio.";
  }

  if (lower.includes("who are you")) {
    return "I'm Zynox, a virtual assistant built to help you explore Sureshkumar A’s work and skills.";
  }

  if (lower.includes("suresh") || lower.includes("owner")|| lower.includes("about")) {
    return "Sureshkumar A is a Computer Science student skilled in Java, IoT, and modern AI projects.";
  }

  if (lower.includes("project")) {
    return "You can visit the Projects section to see Sureshkumar’s key works and innovations.";
  }

  if (lower.includes("skill")) {
    return "Sureshkumar’s skills include Java, React, and IoT development. You can explore them in the Skills section.";
  }

  if (lower.includes("contact") || lower.includes("connect")) {
    return "You can connect with Sureshkumar via the Contact section or through his social links.";
  }

  if (lower.includes("certification")) {
    return "You can check Sureshkumar’s achievements in the Certifications section.";
  }

  if (lower.includes("help") || lower.includes("guide")) {
    return "I can help you navigate this portfolio — try asking about projects, skills, or contact info.";
  }

  const replies = [
    "That's an interesting thought!",
    "I’m here to help you explore Sureshkumar’s portfolio.",
    "Could you please clarify what you’d like to know?",
    "You can ask about projects, skills, or contact details.",
  ];

  return replies[Math.floor(Math.random() * replies.length)];
};
