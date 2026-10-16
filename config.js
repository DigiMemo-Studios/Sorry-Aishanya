// DigiMemo Configuration
// Edit this file to customize the content, styles, music, and layout of your interactive story!

const websiteData = {
  // Global Web App Settings
  title: "I'm Really Sorry... 🥺",
  subtitle: "A little message from my heart",
  songUrl: "music.mp3", // Local background music
  musicAutoplay: true,

  // Theme styling (Soft apologies pastel theme: lavender & blush pink)
  primaryColor: "#a29bfe", // Soft lavender
  secondaryColor: "#ff85a2", // Soft blush pink
  accentColor: "#ff7675", // Soft red

  // Choose default global character theme: "bunny", "bear", "kitten", "panda", "hamster"
  characterTheme: "panda",

  // Card background styling (can use glassmorphism gradients)
  cardGradient: "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(240, 240, 255, 0.85))",

  // Website flow pages
  // Each page will be rendered dynamically inside the story container.
  // Available expressions: "happy", "sad", "excited", "shy", "crying", "hugging", "blushing"
  // Types: "story" (standard message), "letter" (interactive envelope), "photos" (scrapbook), "question" (runaway NO button)
  pages: [
    {
      type: "story",
      character: "panda",
      expression: "sad",
      bubbleText: "Hi... 🥺",
      message: "To my Aditya, my baby, my heart ❤️",
      buttonText: "What's this? 🥺"
    },
    {
      type: "story",
      character: "panda",
      expression: "crying",
      bubbleText: "I'm so sorry... 😭",
      message: "I know I made a mistake, baby, and I know how much honesty means to you. You had already told me how much you hate lies, and I am genuinely sorry that I hurt your trust. I am not trying to justify what I did. I was scared of losing you, and in that fear, I chose the wrong way to handle things. Please forgive me, Aditya. I just want one chance to make things right.",
      buttonText: "Please read this... ✉️"
    },
    {
      type: "letter",
      character: "panda",
      expression: "shy",
      bubbleText: "For you ✉️",
      message: "Please open this small envelope. I put my whole heart into writing this for you.",
      envelopeLabel: "Tap to read",
      letterContent: "Do you remember our first meeting at the temple we had talked about, where you made me wear that ring? We started our relationship with God's blessings, and that moment will always be special to me. We built this relationship with so much love, so many promises, and so many beautiful memories. Do you really think we should give up on everything without giving ourselves a chance to work through this difficult phase? Baby, every relationship faces difficulties. Your Bhaiya and Bhabhi's relationship, too, has its own journey. No relationship follows a perfect straight line. What matters is how two people handle the difficult phases together. We had promised each other that we would try to avoid the toxic patterns that so many couples fall into. We always tried to sort out our fights, say sorry, understand each other, and find our way back. Why can't we try to do that now, too? I know I can be a little stubborn sometimes, and I know I don't always listen the way I should. But I am willing to learn. Your Bhaiya told me to handle this situation with patience, and I understand that now. Just as he gives his girlfriend space when she needs it, I want to learn to give you the space you need, too. I won't force you to talk or rush you into forgiving me. Take your time, baby. I am ready to wait. But please, remember that your little girl made a mistake; she didn't stop loving you. I am not asking you to ignore what happened. I am asking you to give me one opportunity to rebuild the trust I damaged. You always called me your princess, your heart, your baby. Can we please give the relationship we created with so much love a chance to heal?And baby, Bhagwan Ji taught us to seek blessings for our relationship, not to give up the moment things become difficult. Maybe this is a test of our patience, our understanding, and how we handle the difficult days, not just the beautiful ones. We made promises to each other, and I know promises don't mean we will never make mistakes. They mean we should learn from them and try to become better. Our second-month anniversary is on the 25th, and I wish more than anything that we could approach that day with peace in our hearts. I don't want you to stay because you feel pressured. I want you to stay because, when you've had time to think, you feel that what we have is worth another chance. Aditya, I am truly sorry. I will respect your space, learn from my mistake, and show you through my actions that I can be more honest and understanding. Please don't give up on us just yet, baby. Let me correct my mistake. Let us try once more, slowly, patiently, and honestly. We started this relationship with so much love and God's blessings. I still hope we can find our way back to each other. I love you, Aditya. And if your heart is willing, I am still here, ready to make things right. ❤️Forever your princess,Aishanya ❤️",
      buttonText: "Our memories... 📸"
    },
    {
      type: "photos",
      character: "panda",
      expression: "hugging",
      bubbleText: "Our moments 📸",
      message: "Looking at these beautiful memories always reminds me of how much you mean to me.",
      photos: [
        {
          url: "images/photo1.jpg",
          caption: "Always in my heart 💕"
        },
        {
          url: "images/photo2.jpg",
          caption: "My favorite person ✨"
        },
        {
          url: "images/photo3.jpg",
          caption: "11:11 You are my wish 🌸"
        }
      ],
      buttonText: "Finally... 🥺"
    },
    {
      type: "question",
      character: "panda",
      expression: "shy",
      bubbleText: "Do you forgive me? 🥺",
      message: "Please consider this relationship once again... I really want to make things right! 🥺❤️",
      yesButtonText: "Yes, I forgive you! 🥰",
      noButtonText: "No! 😤",
      noRunawayCount: 6, // Number of times the NO button runs away before becoming clickable
      noRunawayDialogues: [
        "Wait, please? 🥺",
        "I'm truly sorry baby... 💔",
        "Please don't give up on us... 🥺",
        "Give me one more chance? 🥺",
        "Please consider us once again... 🥺❤️",
        "Okay, last chance! 🥺"
      ],
      noClickSadResponse: "Fine, you clicked No... But I'm still going to keep trying to make it up to you and prove my love! 🥺❤️"
    }
  ],

  // Final Celebration/Ending Screen
  ending: {
    character: "panda",
    expression: "excited",
    bubbleText: "Yay! 🎉❤️",
    message: "Thank you for forgiving me and giving us another chance! You've made me the happiest person in the world. I promise to cherish you every single day! 💕",
    replayButtonText: "Replay ❤️",
    screenshotButtonText: "Save Memo 📸"
  }
};
