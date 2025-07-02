const paintColors = [
    { color: "#fffff", name: "white", code: "ROS-100" },
    { color: "#000000", name: "black", code: "ROS-111" },
    { color: "#f8f6f1", name: "Antique White", code: "ROS-106" },
    { color: "#c2bbb2", name: "Ash Gray", code: "ROS-137" },
    { color: "#55514e", name: "Almost Black", code: "ROS-112" },
    { color: "#b49982", name: "Angeline", code: "ROS-144" },
    { color: "#00a884", name: "Asian Green", code: "ROS-220" },
    { color: "#f4f3f1", name: "Arcadia", code: "ROS-136" },
    { color: "#e2cab6", name: "Blessing", code: "ROS-107" },
    { color: "#000000", name: "Black", code: "ROS-111" },
    { color: "#e8cdd8", name: "Candy Tuft", code: "ROS-108" },
    { color: "#d7c9bd", name: "Cappuccino", code: "ROS-134" },
    { color: "#b7bcaf", name: "Choco Brown", code: "ROS-113" },
    { color: "#64b44e", name: "Cool Mint", code: "ROS-213" },
    { color: "#cbd7e5", name: "Cozy Breeze", code: "ROS-202" },
    { color: "#c3e59e", name: "Fresh Mint", code: "ROS-210" },
    { color: "#9ace4e", name: "Hi Way", code: "ROS-215" },
    { color: "#fff5ec", name: "Gentle Touch", code: "ROS-104" },
    { color: "#4e7c58", name: "Hunter Green", code: "ROS-218" },
    { color: "#ecb263", name: "Happy Days", code: "ROS-153" },
    { color: "#7fbac6", name: "Lagoon Blue", code: "ROS-206" },
    { color: "#dfb276", name: "Golden Butter", code: "ROS-151" },
    { color: "#e3cdb6", name: "Easy Gray", code: "ROS-102" },
    { color: "#00b2a1", name: "Hettifune Blue", code: "ROS-223" },
    { color: "#d0f1b6", name: "Green Gable", code: "ROS-211" },
    { color: "#f7e0ca", name: "Gentle Vanilla", code: "ROS-150" },
    { color: "#fdfbfa", name: "Faith", code: "ROS-103" },
    { color: "#b4d455", name: "Jade Green", code: "ROS-214" },
    { color: "#fff", name: "Bridal Gown", code: "ROS-101" },
    { color: "#9d4c4a", name: "Maple", code: "ROS-143" },
    { color: "#a5c953", name: "Lime", code: "ROS-212" },
    { color: "#ceb7a3", name: "Nicole Pink", code: "ROS-146" },
    { color: "#b85757", name: "Red Earth", code: "ROS-141" },
    { color: "#f7c5c7", name: "Princess", code: "ROS-147" },
    { color: "#57524d", name: "Strong Gray", code: "ROS-110" },
    { color: "#000000", name: "Touch of Gray", code: "ROS-135" },
    { color: "#f9f3f1", name: "Romance", code: "ROS-105" },
    { color: "#ecd0c1", name: "Sun Tan", code: "ROS-133" },
    { color: "#c9ccc9", name: "Sky Gray", code: "ROS-138" },
    { color: "#bec0bc", name: "Neutral Gray", code: "ROS-139" },
    { color: "#fbd2ba", name: "Amber Rose", code: "ROS-148" },
    { color: "#f9f6ee", name: "White", code: "ROS-100" },
    { color: "#ddf1f4", name: "Garden Mist", code: "ROS-204" },
    { color: "#5c6b5b", name: "Safari Brown", code: "ROS-140" },
    { color: "#7ca972", name: "Tropical Rain", code: "ROS-216" },
    { color: "#b4dee5", name: "Zen Green", code: "ROS-205" },
    { color: "#a1c0da", name: "Royal Purple", code: "ROS-230" },
    { color: "#edc4bd", name: "Victory Red", code: "ROS-229" },
    { color: "#874b47", name: "Terra Cotta", code: "ROS-228" },
    { color: "#c17d6c", name: "Sunflower Peach", code: "ROS-156" },
    { color: "#d2d9d6", name: "Snow", code: "ROS-109" },
]

const paintCode = document.getElementById("paint-code");
const paintContainer = document.getElementById("paints")

paintColors.forEach(color => {
    const paintColor = document.createElement("div")
    paintColor.classList.add("paint-color");
    paintColor.style.backgroundColor = color.color;
    paintContainer.append(paintColor);

    const paintName = document.createElement("h1");
    paintName.classList.add("paint-name")
    paintName.innerHTML = color.name.charAt(0).toUpperCase() + color.name.slice(1);
    paintColor.append(paintName);

    const paintCode = document.createElement("p");
    paintCode.classList.add("paint-code");
    paintCode.innerHTML = color.code;
    paintColor.append(paintCode);
})
