const quizBank = {
  travel: {
    title: "Travel Personality Quiz",
    questions: [
      {
      question: "How do you prefer to spend your holiday?",
      questionImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",

      answers: [
          { text: "Exploring new places", type: "adventurous" },
          { text: "Relaxing quietly", type: "calm" },
          { text: "Hanging out with friends", type: "social" },
          { text: "Trying creative activities", type: "creative" }
        ]
      },
      answerImages: {
      adventurous: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      calm: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      social: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=800&q=80",
      creative: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
    },
      {
        question: "Pick your ideal trip:",
        answers: [
          { text: "Road trip", type: "adventurous" },
          { text: "Beach retreat", type: "calm" },
          { text: "City tour", type: "social" },
          { text: "Cultural experience", type: "creative" }
        ]
      }
    ]
  },

  fashion: {
    title: "Fashion Personality Quiz",
    questionImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",

    answerImages: {
      adventurous: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      calm: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
      social: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      creative: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
    },

    questions: [
      {
        question: "Pick your style:",
        answers: [
          { text: "Bold", type: "adventurous" },
          { text: "Minimal", type: "calm" },
          { text: "Trendy", type: "social" },
          { text: "Artistic", type: "creative" }
        ]
      }
    ]
  }
};
