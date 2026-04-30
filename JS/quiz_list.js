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
    questionImage: "Image/fashion/Fashion_quiz.avif",
    questions: [
      {
        question: "Pick your style:",
        image: "#",
        answers: [
          { 
            text: "Bold", 
            type: "adventurous",
            image: "#" 
          },
          { 
            text: "Minimal", 
            type: "calm",
            image: "#"  
          },
          { 
            text: "Trendy", 
            type: "social",
            image: "#"  
          },
          { 
            text: "Artistic", 
            type: "creative" ,
            image: "#" 
          }
        ]
      },
      {
        question: "How do you shop?",
        image: "#",
        answers: [
          { 
            text: "Try new trends", 
            type: "adventurous",
            image: "#"  
          },
          { 
            text: "Stick to basics", 
            type: "calm",
            image: "#"   
          },
          { 
            text: "Follow friends", 
            type: "social",
            image: "#"   
          },
          { 
            text: "Look for unique items", 
            type: "creative",
            image: "#"  
          }
        ]
      },
      {
        question: "Favorite outfit vibe?",
        image: "#",
        answers: [
          { 
            text: "Statement look", 
            type: "adventurous",
            image: "#"   
          },
          { 
            text: "Comfort wear", 
            type: "calm",
            image: "#"   
          },
          { 
            text: "Stylish group outfit", 
            type: "social",
            image: "#"   
          },
          { 
            text: "Creative mix", 
            type: "creative",
            image: "#"   
          }
        ]
      },
      {
        question: "Your wardrobe is:",
        image: "#",
        answers: [
          { 
            text: "Experimental", 
            type: "adventurous",
            image: "#"   
          },
          { 
            text: "Simple", 
            type: "calm",
            image: "#"    
          },
          { 
            text: "Trendy", 
            type: "social",
            image: "#"    
          },
          { 
            text: "Unique", 
            type: "creative",
            image: "#"    
          }
        ]
      },
      {
        question: "Pick a color palette:",
        image: "#",
        answers: [
          { 
            text: "Bright colors", 
            type: "adventurous",
            image: "#"    
          },
          { 
            text: "Neutral tones", 
            type: "calm",
            image: "#"    
          },
          { 
            text: "Popular colors", 
            type: "social",
            image: "#"   
          },
          { 
            text: "Mixed artistic shades", 
            type: "creative",
            image: "#"    
          }
        ]
      },
      {
        question: "Your fashion goal:",
        image: "#",
        answers: [
          { 
            text: "Stand out", 
            type: "adventurous",
            image: "#"    
          },
          { 
            text: "Feel comfortable", 
            type: "calm",
            image: "#"    
          },
          { 
            text: "Look trendy", 
            type: "social",
            image: "#"    
          },
          { 
            text: "Express yourself", 
            type: "creative",
            image: "#"    
          }
        ]
      },
      {
        question: "Favorite accessory:",
        image: "#",
        answers: [
          { 
            text: "Bold sunglasses", 
            type: "adventurous" ,
            image: "#"   
          },
          { 
            text: "Simple watch", 
            type: "calm" ,
            image: "#"   
          },
          { 
            text: "Matching items", 
            type: "social" ,
            image: "#"   
          },
          { 
            text: "Handmade jewelry", 
            type: "creative",
            image: "#"    
          }
        ]
      },
      {
        question: "How do you follow trends?",
        image: "#",
        answers: [
          { 
            text: "Experiment", 
            type: "adventurous",
            image: "#"    
          },
          { 
            text: "Ignore them", 
            type: "calm",
            image: "#"    
          },
          { 
            text: "Follow popular", 
            type: "social",
            image: "#"    
          },
          { 
            text: "Remix creatively", 
            type: "creative",
            image: "#"    
          }
        ]
      },
      {
        question: "Pick a weekend outfit:",
        image: "#",
        answers: [
          { 
            text: "Bold look", 
            type: "adventurous",
            image: "#"    
          },
          { 
            text: "Relaxed wear", 
            type: "calm",
            image: "#"    
          },
          { 
            text: "Party outfit", 
            type: "social",
            image: "#"    
          },
          { 
            text: "Creative mix", 
            type: "creative",
            image: "#"    
          }
        ]
      },
      {
        question: "Your style personality:",
        image: "#",
        answers: [
          { 
            text: "Daring", 
            type: "adventurous",
            image: "#"    
          },
          { 
            text: "Calm", 
            type: "calm",
            image: "#"    
          },
          { 
            text: "Friendly", 
            type: "social" ,
            image: "#"   
          },
          { 
            text: "Creative", 
            type: "creative",
            image: "#"    
          }
        ]
      }
    ]
  },
  flower: {
    title: "Flower Personality Quiz",
    time: "8 mins",
    difficulty: "Easy",
    questionImage: "Image/flower/flower_quiz.jpg",
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

  colour: {
    title: "Colour Personality Quiz",
    time: "10 mins",
    difficulty: "Medium",
    questionImage: "Image/colour/colour_quiz.jpg",
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
  love: {
    title: "Love Personality Quiz",
    time: "15 mins",
    difficulty: "Hard",
    questionImage: "Image/love/love_quiz_01.png",
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

  pets: {
    title: "Pet Personality Quiz",
    time: "11 mins",
    difficulty: "Medium",
    questionImage: "Image/pets/pets_quiz.jpg",
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
  }
};

window.quizList = quizList;
