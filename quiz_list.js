const quizList = {
  travel: {
    title: "Travel Personality Quiz",
    time: "5 mins",
    difficulty: "Medium",
    questionImage: "Image/travel/travel_quiz.jpg",
    questions: [
      {
        question: "How do you prefer to spend your holiday?",
        image: "Image/travel/Q1/quiz_01.jpg",
        answers: [
          { 
            text: "Exploring new places", 
            type: "adventurous",
            image: "Image/travel/Q1/travel_quiz_01_answer_01.jpg"
          },
          { 
            text: "Relaxing quietly", 
            type: "calm",
            image: "Image/travel/Q1/travel_quiz_01_answer_02.jpg"
          },
          { text: "Hanging out with friends", 
            type: "social",
            image: "Image/travel/Q1/travel_quiz_01_answer_03.jpg" 
          },
          { text: "Trying creative activities", 
            type: "creative",
            image: "Image/travel/Q1/travel_quiz_01_answer_04.jpg" 
          }
        ]
      },
      {
        question: "Pick your ideal trip:",
        image: "Image/travel/Q2/quiz_02.jpg",
        answers: [
          { 
            text: "Road trip", 
            type: "adventurous",
            image: "Image/travel/Q2/travel_quiz_02_answer_01.jpg" 
          },
          { text: "Beach retreat", 
           type: "calm",
            image: "Image/travel/Q2/travel_quiz_02_answer_02.jpg"           
          },
          { text: "City tour", 
           type: "social",
            image: "Image/travel/Q2/travel_quiz_02_answer_03.jpg" 
          },
          { text: "Cultural experience", 
           type: "creative",
            image: "Image/travel/Q2/travel_quiz_02_answer_04.jpg" 
          }
        ]
      },
      {
        question: "What excites you most while traveling?",
        image: "Image/travel/Q3/quiz_03.jpg",
        answers: [
          { 
            text: "New adventures", 
            type: "adventurous",
            image: "Image/travel/Q3/travel_quiz_03_answer_01.jpg"  
          },
          { 
            text: "Peaceful surroundings", 
            type: "calm",
            image: "Image/travel/Q3/travel_quiz_03_answer_02.jpg"  
          },
          { 
            text: "Meeting people", 
            type: "social",
            image: "Image/travel/Q3/travel_quiz_03_answer_03.jpg"  
          },
          { 
            text: "Learning culture", 
            type: "creative",
            image: "Image/travel/Q3/travel_quiz_03_answer_04.jpg"  
          }
        ]
      },
      {
        question: "Your travel style is:",
        image: "Image/travel/Q4/quiz_04.jpg",
        answers: [
          { 
            text: "Spontaneous", 
            type: "adventurous",
            image: "Image/travel/Q4/travel_quiz_04_answer_01.jpg" 
          },
          { 
            text: "Planned and slow", 
            type: "calm",
            image: "Image/travel/Q4/travel_quiz_04_answer_02.jpg"  
          },
          { 
            text: "Group-based", 
            type: "social",
            image: "Image/travel/Q4/travel_quiz_04_answer_03.jpg"  
          },
          { 
            text: "Unique and artistic", 
            type: "creative",
            image: "Image/travel/Q4/travel_quiz_04_answer_04.jpg"  
          }
        ]
      },
      {
        question: "Favorite travel memory type?",
        image: "Image/travel/Q5/quiz_05.jpg",
        answers: [
          { 
            text: "Thrill and action", 
            type: "adventurous",
            image: "Image/travel/Q5/travel_quiz_05_answer_01.jpg"  
          },
          { 
            text: "Peaceful moments", 
            type: "calm",
            image: "Image/travel/Q5/travel_quiz_05_answer_02.jpg"  
          },
          { 
            text: "Fun with friends", 
            type: "social",
            image: "Image/travel/Q5/travel_quiz_05_answer_03.jpg"  
          },
          { 
            text: "Beautiful experiences", 
            type: "creative",
            image: "Image/travel/Q5/travel_quiz_05_answer_04.jpg"  
          }
        ]
      },
      {
        question: "Pick a travel destination:",
        image: "Image/travel/Q6/quiz_06.jpg",
        answers: [
          { 
            text: "Mountains", 
            type: "adventurous",
            image: "Image/travel/Q6/travel_quiz_06_answer_01.jpeg"  
          },
          { 
            text: "Beach", 
            type: "calm",
            image: "Image/travel/Q6/travel_quiz_06_answer_02.jpg"  
          },
          { 
            text: "City", 
            type: "social",
            image: "Image/travel/Q6/travel_quiz_06_answer_03.jpg"  
          },
          { 
            text: "Historic town", 
            type: "creative",
            image: "Image/travel/Q6/travel_quiz_06_answer_04.jpg"  
          }
        ]
      },
      {
        question: "What do you pack first?",
        image: "Image/travel/Q7/quiz_07.jpg",
        answers: [
          { 
            text: "Adventure gear", 
            type: "adventurous",
            image: "Image/travel/Q7/travel_quiz_07_answer_01.jpg"  
          },
          { 
            text: "Comfort items", 
            type: "calm",
            image: "Image/travel/Q7/travel_quiz_07_answer_02.jpg"   
          },
          { 
            text: "Camera", 
            type: "social",
            image: "Image/travel/Q7/travel_quiz_07_answer_03.jpg"   
          },
          { 
            text: "Notebook", 
            type: "creative",
            image: "Image/travel/Q7/travel_quiz_07_answer_04.jpeg"   
          }
        ]
      },
      {
        question: "Your travel goal is:",
        image: "Image/travel/Q8/quiz_08.jpg",
        answers: [
          { 
            text: "Explore unknown", 
            type: "adventurous",
            image: "Image/travel/Q8/travel_quiz_08_answer_01.jpg"   
          },
          { 
            text: "Relax deeply", 
            type: "calm",
            image: "Image/travel/Q8/travel_quiz_08_answer_02.jpg"  
          },
          { 
            text: "Create memories", 
            type: "social",
            image: "Image/travel/Q8/travel_quiz_08_answer_03.jpg"  
          },
          { 
            text: "Find inspiration", 
            type: "creative",
            image: "Image/travel/Q8/travel_quiz_08_answer_04.jpg"  
          }
        ]
      },
      {
        question: "How do you plan trips?",
        image: "Image/travel/Q9/quiz_09.jpg",
        answers: [
          { 
            text: "Last minute", 
            type: "adventurous",
            image: "Image/travel/Q9/travel_quiz_09_answer_01.jpg"  
          },
          { 
            text: "Carefully", 
            type: "calm",
            image: "Image/travel/Q9/travel_quiz_09_answer_02.jpg" 
          },
          { 
            text: "With friends", 
            type: "social",
            image: "Image/travel/Q9/travel_quiz_09_answer_03.jpg" 
          },
          { 
            text: "With unique ideas", 
            type: "creative",
            image: "Image/travel/Q9/travel_quiz_09_answer_04.jpg" 
          }
        ]
      },
      {
        question: "Your ideal weekend trip:",
        image: "Image/travel/Q10/quiz_10.jpg",
        answers: [
          { 
            text: "Adventure outing", 
            type: "adventurous",
            image: "Image/travel/Q10/travel_quiz_10_answer_01.jpg" 
          },
          { 
            text: "Relaxing stay", 
            type: "calm",
            image: "Image/travel/Q10/travel_quiz_10_answer_02.jpeg"  
          },
          { 
            text: "Party trip", 
            type: "social",
            image: "Image/travel/Q10/travel_quiz_10_answer_03.jpeg" 
          },
          { 
            text: "Creative retreat", 
            type: "creative",
            image: "Image/travel/Q10/travel_quiz_10_answer_04.jpeg"  
          }
        ]
      }
    ]
  },

  fashion: {
    title: "Fashion Personality Quiz",
    time: "6 mins",
    difficulty: "Easy",
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
      },
      {
        question: "How do you shop?",
        answers: [
          { text: "Try new trends", type: "adventurous" },
          { text: "Stick to basics", type: "calm" },
          { text: "Follow friends", type: "social" },
          { text: "Look for unique items", type: "creative" }
        ]
      },
      {
        question: "Favorite outfit vibe?",
        answers: [
          { text: "Statement look", type: "adventurous" },
          { text: "Comfort wear", type: "calm" },
          { text: "Stylish group outfit", type: "social" },
          { text: "Creative mix", type: "creative" }
        ]
      },
      {
        question: "Your wardrobe is:",
        answers: [
          { text: "Experimental", type: "adventurous" },
          { text: "Simple", type: "calm" },
          { text: "Trendy", type: "social" },
          { text: "Unique", type: "creative" }
        ]
      },
      {
        question: "Pick a color palette:",
        answers: [
          { text: "Bright colors", type: "adventurous" },
          { text: "Neutral tones", type: "calm" },
          { text: "Popular colors", type: "social" },
          { text: "Mixed artistic shades", type: "creative" }
        ]
      },
      {
        question: "Your fashion goal:",
        answers: [
          { text: "Stand out", type: "adventurous" },
          { text: "Feel comfortable", type: "calm" },
          { text: "Look trendy", type: "social" },
          { text: "Express yourself", type: "creative" }
        ]
      },
      {
        question: "Favorite accessory:",
        answers: [
          { text: "Bold sunglasses", type: "adventurous" },
          { text: "Simple watch", type: "calm" },
          { text: "Matching items", type: "social" },
          { text: "Handmade jewelry", type: "creative" }
        ]
      },
      {
        question: "How do you follow trends?",
        answers: [
          { text: "Experiment", type: "adventurous" },
          { text: "Ignore them", type: "calm" },
          { text: "Follow popular", type: "social" },
          { text: "Remix creatively", type: "creative" }
        ]
      },
      {
        question: "Pick a weekend outfit:",
        answers: [
          { text: "Bold look", type: "adventurous" },
          { text: "Relaxed wear", type: "calm" },
          { text: "Party outfit", type: "social" },
          { text: "Creative mix", type: "creative" }
        ]
      },
      {
        question: "Your style personality:",
        answers: [
          { text: "Daring", type: "adventurous" },
          { text: "Calm", type: "calm" },
          { text: "Friendly", type: "social" },
          { text: "Creative", type: "creative" }
        ]
      }
    ]
  },
  flower: {
    title: "Flower Personality Quiz",
    time: "8 mins",
    difficulty: "Easy",
    questionImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    answerImages: {
      adventurous: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      calm: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      social: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=800&q=80",
      creative: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
    },
    questions: [
      {
        question: "How do you prefer to spend your holiday?",
        answers: [
          { text: "Exploring new places", type: "adventurous" },
          { text: "Relaxing quietly", type: "calm" },
          { text: "Hanging out with friends", type: "social" },
          { text: "Trying creative activities", type: "creative" }
        ]
      },
      {
        question: "Pick your ideal trip:",
        answers: [
          { text: "Road trip", type: "adventurous" },
          { text: "Beach retreat", type: "calm" },
          { text: "City tour", type: "social" },
          { text: "Cultural experience", type: "creative" }
        ]
      },
      {
        question: "What excites you most while traveling?",
        answers: [
          { text: "New adventures", type: "adventurous" },
          { text: "Peaceful surroundings", type: "calm" },
          { text: "Meeting people", type: "social" },
          { text: "Learning culture", type: "creative" }
        ]
      },
      {
        question: "Your travel style is:",
        answers: [
          { text: "Spontaneous", type: "adventurous" },
          { text: "Planned and slow", type: "calm" },
          { text: "Group-based", type: "social" },
          { text: "Unique and artistic", type: "creative" }
        ]
      },
      {
        question: "Favorite travel memory type?",
        answers: [
          { text: "Thrill and action", type: "adventurous" },
          { text: "Peaceful moments", type: "calm" },
          { text: "Fun with friends", type: "social" },
          { text: "Beautiful experiences", type: "creative" }
        ]
      },
      {
        question: "Pick a travel destination:",
        answers: [
          { text: "Mountains", type: "adventurous" },
          { text: "Beach", type: "calm" },
          { text: "City", type: "social" },
          { text: "Historic town", type: "creative" }
        ]
      },
      {
        question: "What do you pack first?",
        answers: [
          { text: "Adventure gear", type: "adventurous" },
          { text: "Comfort items", type: "calm" },
          { text: "Camera", type: "social" },
          { text: "Notebook", type: "creative" }
        ]
      },
      {
        question: "Your travel goal is:",
        answers: [
          { text: "Explore unknown", type: "adventurous" },
          { text: "Relax deeply", type: "calm" },
          { text: "Create memories", type: "social" },
          { text: "Find inspiration", type: "creative" }
        ]
      },
      {
        question: "How do you plan trips?",
        answers: [
          { text: "Last minute", type: "adventurous" },
          { text: "Carefully", type: "calm" },
          { text: "With friends", type: "social" },
          { text: "With unique ideas", type: "creative" }
        ]
      },
      {
        question: "Your ideal weekend trip:",
        answers: [
          { text: "Adventure outing", type: "adventurous" },
          { text: "Relaxing stay", type: "calm" },
          { text: "Party trip", type: "social" },
          { text: "Creative retreat", type: "creative" }
        ]
      }
    ]
  },

  colour: {
    title: "Colour Personality Quiz",
    time: "10 mins",
    difficulty: "Easy",
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
      },
      {
        question: "How do you shop?",
        answers: [
          { text: "Try new trends", type: "adventurous" },
          { text: "Stick to basics", type: "calm" },
          { text: "Follow friends", type: "social" },
          { text: "Look for unique items", type: "creative" }
        ]
      },
      {
        question: "Favorite outfit vibe?",
        answers: [
          { text: "Statement look", type: "adventurous" },
          { text: "Comfort wear", type: "calm" },
          { text: "Stylish group outfit", type: "social" },
          { text: "Creative mix", type: "creative" }
        ]
      },
      {
        question: "Your wardrobe is:",
        answers: [
          { text: "Experimental", type: "adventurous" },
          { text: "Simple", type: "calm" },
          { text: "Trendy", type: "social" },
          { text: "Unique", type: "creative" }
        ]
      },
      {
        question: "Pick a color palette:",
        answers: [
          { text: "Bright colors", type: "adventurous" },
          { text: "Neutral tones", type: "calm" },
          { text: "Popular colors", type: "social" },
          { text: "Mixed artistic shades", type: "creative" }
        ]
      },
      {
        question: "Your fashion goal:",
        answers: [
          { text: "Stand out", type: "adventurous" },
          { text: "Feel comfortable", type: "calm" },
          { text: "Look trendy", type: "social" },
          { text: "Express yourself", type: "creative" }
        ]
      },
      {
        question: "Favorite accessory:",
        answers: [
          { text: "Bold sunglasses", type: "adventurous" },
          { text: "Simple watch", type: "calm" },
          { text: "Matching items", type: "social" },
          { text: "Handmade jewelry", type: "creative" }
        ]
      },
      {
        question: "How do you follow trends?",
        answers: [
          { text: "Experiment", type: "adventurous" },
          { text: "Ignore them", type: "calm" },
          { text: "Follow popular", type: "social" },
          { text: "Remix creatively", type: "creative" }
        ]
      },
      {
        question: "Pick a weekend outfit:",
        answers: [
          { text: "Bold look", type: "adventurous" },
          { text: "Relaxed wear", type: "calm" },
          { text: "Party outfit", type: "social" },
          { text: "Creative mix", type: "creative" }
        ]
      },
      {
        question: "Your style personality:",
        answers: [
          { text: "Daring", type: "adventurous" },
          { text: "Calm", type: "calm" },
          { text: "Friendly", type: "social" },
          { text: "Creative", type: "creative" }
        ]
      }
    ]
  },
  love: {
    title: "Love Personality Quiz",
    time: "5 mins",
    difficulty: "Medium",
    questionImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    answerImages: {
      adventurous: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      calm: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      social: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=800&q=80",
      creative: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
    },
    questions: [
      {
        question: "How do you prefer to spend your holiday?",
        answers: [
          { text: "Exploring new places", type: "adventurous" },
          { text: "Relaxing quietly", type: "calm" },
          { text: "Hanging out with friends", type: "social" },
          { text: "Trying creative activities", type: "creative" }
        ]
      },
      {
        question: "Pick your ideal trip:",
        answers: [
          { text: "Road trip", type: "adventurous" },
          { text: "Beach retreat", type: "calm" },
          { text: "City tour", type: "social" },
          { text: "Cultural experience", type: "creative" }
        ]
      },
      {
        question: "What excites you most while traveling?",
        answers: [
          { text: "New adventures", type: "adventurous" },
          { text: "Peaceful surroundings", type: "calm" },
          { text: "Meeting people", type: "social" },
          { text: "Learning culture", type: "creative" }
        ]
      },
      {
        question: "Your travel style is:",
        answers: [
          { text: "Spontaneous", type: "adventurous" },
          { text: "Planned and slow", type: "calm" },
          { text: "Group-based", type: "social" },
          { text: "Unique and artistic", type: "creative" }
        ]
      },
      {
        question: "Favorite travel memory type?",
        answers: [
          { text: "Thrill and action", type: "adventurous" },
          { text: "Peaceful moments", type: "calm" },
          { text: "Fun with friends", type: "social" },
          { text: "Beautiful experiences", type: "creative" }
        ]
      },
      {
        question: "Pick a travel destination:",
        answers: [
          { text: "Mountains", type: "adventurous" },
          { text: "Beach", type: "calm" },
          { text: "City", type: "social" },
          { text: "Historic town", type: "creative" }
        ]
      },
      {
        question: "What do you pack first?",
        answers: [
          { text: "Adventure gear", type: "adventurous" },
          { text: "Comfort items", type: "calm" },
          { text: "Camera", type: "social" },
          { text: "Notebook", type: "creative" }
        ]
      },
      {
        question: "Your travel goal is:",
        answers: [
          { text: "Explore unknown", type: "adventurous" },
          { text: "Relax deeply", type: "calm" },
          { text: "Create memories", type: "social" },
          { text: "Find inspiration", type: "creative" }
        ]
      },
      {
        question: "How do you plan trips?",
        answers: [
          { text: "Last minute", type: "adventurous" },
          { text: "Carefully", type: "calm" },
          { text: "With friends", type: "social" },
          { text: "With unique ideas", type: "creative" }
        ]
      },
      {
        question: "Your ideal weekend trip:",
        answers: [
          { text: "Adventure outing", type: "adventurous" },
          { text: "Relaxing stay", type: "calm" },
          { text: "Party trip", type: "social" },
          { text: "Creative retreat", type: "creative" }
        ]
      }
    ]
  },

  pets: {
    title: "Pet Personality Quiz",
    time: "11 mins",
    difficulty: "Easy",
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
      },
      {
        question: "How do you shop?",
        answers: [
          { text: "Try new trends", type: "adventurous" },
          { text: "Stick to basics", type: "calm" },
          { text: "Follow friends", type: "social" },
          { text: "Look for unique items", type: "creative" }
        ]
      },
      {
        question: "Favorite outfit vibe?",
        answers: [
          { text: "Statement look", type: "adventurous" },
          { text: "Comfort wear", type: "calm" },
          { text: "Stylish group outfit", type: "social" },
          { text: "Creative mix", type: "creative" }
        ]
      },
      {
        question: "Your wardrobe is:",
        answers: [
          { text: "Experimental", type: "adventurous" },
          { text: "Simple", type: "calm" },
          { text: "Trendy", type: "social" },
          { text: "Unique", type: "creative" }
        ]
      },
      {
        question: "Pick a color palette:",
        answers: [
          { text: "Bright colors", type: "adventurous" },
          { text: "Neutral tones", type: "calm" },
          { text: "Popular colors", type: "social" },
          { text: "Mixed artistic shades", type: "creative" }
        ]
      },
      {
        question: "Your fashion goal:",
        answers: [
          { text: "Stand out", type: "adventurous" },
          { text: "Feel comfortable", type: "calm" },
          { text: "Look trendy", type: "social" },
          { text: "Express yourself", type: "creative" }
        ]
      },
      {
        question: "Favorite accessory:",
        answers: [
          { text: "Bold sunglasses", type: "adventurous" },
          { text: "Simple watch", type: "calm" },
          { text: "Matching items", type: "social" },
          { text: "Handmade jewelry", type: "creative" }
        ]
      },
      {
        question: "How do you follow trends?",
        answers: [
          { text: "Experiment", type: "adventurous" },
          { text: "Ignore them", type: "calm" },
          { text: "Follow popular", type: "social" },
          { text: "Remix creatively", type: "creative" }
        ]
      },
      {
        question: "Pick a weekend outfit:",
        answers: [
          { text: "Bold look", type: "adventurous" },
          { text: "Relaxed wear", type: "calm" },
          { text: "Party outfit", type: "social" },
          { text: "Creative mix", type: "creative" }
        ]
      },
      {
        question: "Your style personality:",
        answers: [
          { text: "Daring", type: "adventurous" },
          { text: "Calm", type: "calm" },
          { text: "Friendly", type: "social" },
          { text: "Creative", type: "creative" }
        ]
      }
    ]
  }
};

window.quizList = quizList;
