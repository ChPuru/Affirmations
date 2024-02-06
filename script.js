const predefinedAffirmations = [
  "You are loved and valued just as you are.",
  "You are capable of achieving your dreams.",
  "You possess inner strength and resilience.",
  "You deserve happiness and fulfillment.",
  "You are worthy of love and kindness.",
  "You have the power to overcome any challenge.",
  "You are enough, exactly as you are.",
  "You are surrounded by positivity and abundance.",
  "You are deserving of success and joy.",
  "You are a beacon of light in the world.",
];

const generateRandomAffirmation = () => {
  // Add your own generative affirmations here
  const generativeAffirmations = [
    "You radiate positivity and attract good things into your life.",
    "You are constantly growing and evolving into the best version of yourself.",
    "You embrace challenges as opportunities for growth and learning.",
    "You are a magnet for success and abundance in all areas of your life.",
    "You approach each day with optimism and gratitude.",
    "You are surrounded by love and support from the universe.",
    "You trust in your ability to create the life you desire.",
    "You are open to receiving all the blessings that come your way.",
    "You honor your worth and value with every decision you make.",
    "You believe in yourself and your ability to achieve greatness.",
  ];

  const randomIndex = Math.floor(Math.random() * generativeAffirmations.length);
  return generativeAffirmations[randomIndex];
};

function showAffirmation() {
  const affirmationContainer = document.getElementById("affirmation-container");
  let affirmation;

  // Randomly choose between predefined and generative affirmations
  if (Math.random() < 0.5) {
    const randomIndex = Math.floor(Math.random() * predefinedAffirmations.length);
    affirmation = predefinedAffirmations[randomIndex];
  } else {
    affirmation = generateRandomAffirmation();
  }

  const affirmationElement = document.createElement("p");
  affirmationElement.textContent = affirmation;
  affirmationContainer.innerHTML = "";
  affirmationContainer.appendChild(affirmationElement);
}
