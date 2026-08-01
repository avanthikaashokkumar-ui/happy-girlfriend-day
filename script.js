(() => {
  const canvas = document.getElementById("sky");
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resizeSky() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(90, Math.floor((innerWidth * innerHeight) / 9000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 1.4 + .25,
      a: Math.random() * .7 + .18,
      s: Math.random() * .004 + .001
    }));
  }

  function drawSky(time = 0) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    stars.forEach((star, i) => {
      const twinkle = star.a + Math.sin(time * star.s + i) * .16;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,241,248,${Math.max(.08, twinkle)})`;
      ctx.fill();
    });
    requestAnimationFrame(drawSky);
  }

  resizeSky();
  drawSky();
  addEventListener("resize", resizeSky);

  // Constellation
  const starCard = document.getElementById("starCard");
  const starButtons = [...document.querySelectorAll(".star")];

  function openStar(star) {
    starButtons.forEach((button) => button.classList.toggle("active", button === star));
    starCard.innerHTML = `
      <span>STAR LOG</span>
      <h3>${star.dataset.title}</h3>
      <p>${star.dataset.copy}</p>
    `;
  }

  starButtons.forEach((star) => star.addEventListener("click", () => openStar(star)));

  document.getElementById("randomStarBtn").addEventListener("click", () => {
    const star = starButtons[Math.floor(Math.random() * starButtons.length)];
    document.getElementById("constellation").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => openStar(star), 550);
  });

  // Open-when capsules
  const capsuleDialog = document.getElementById("capsuleDialog");
  const capsuleTitle = document.getElementById("capsuleTitle");
  const capsuleCopy = document.getElementById("capsuleCopy");

  const capsuleMessages = {
    "bad-day": {
      title: "Bad days are not evidence.",
      copy: "One terrible day does not cancel how capable, lovable, funny, intelligent, and strong you are. You are allowed to be tired without turning it into a verdict about yourself. Eat something. Drink water. Complain to me dramatically. We try again tomorrow."
    },
    "miss-me": {
      title: "I miss you too, idiot.",
      copy: "Imagine me stealing your blanket, annoying you on purpose, asking what you want to eat and rejecting every answer, then sitting next to you like that was somehow helpful. Distance is temporary. Us being us is not."
    },
    "doubt": {
      title: "I wish you could borrow my eyes.",
      copy: "You would see someone who tries harder than she gives herself credit for, cares more deeply than she admits, and has already survived things that once felt impossible. You do not need to have everything figured out to be impressive."
    },
    "random": {
      title: "No emergency required.",
      copy: "You are loved on boring Tuesdays, stressful mornings, sleepy calls, messy days, good-hair days, bad-hair days, and every version in between. You do not have to perform for it. It is just yours."
    }
  };

  document.querySelectorAll(".capsule").forEach((button) => {
    button.addEventListener("click", () => {
      const message = capsuleMessages[button.dataset.capsule];
      capsuleTitle.textContent = message.title;
      capsuleCopy.textContent = message.copy;
      capsuleDialog.showModal();
    });
  });

  document.querySelector(".dialog-close").addEventListener("click", () => capsuleDialog.close());
  capsuleDialog.addEventListener("click", (event) => {
    const rect = capsuleDialog.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inside) capsuleDialog.close();
  });

  // Future memory generator
  const futures = [
    {
      symbol: "☾",
      title: "Late-night drive with a playlist we made together",
      copy: "Snacks acquired. Destination optional. Talking required."
    },
    {
      symbol: "🍜",
      title: "Try a restaurant neither of us has been to",
      copy: "We order at least one thing purely because the name sounds good."
    },
    {
      symbol: "🎞",
      title: "A movie night where we each pick one",
      copy: "No vetoes. This is a legally binding Girlfriend Day agreement."
    },
    {
      symbol: "☕",
      title: "Slow café morning with nowhere else to be",
      copy: "Phones down for a bit. Coffee, pastries, and people-watching."
    },
    {
      symbol: "✈",
      title: "A tiny trip to a place we have never seen",
      copy: "One bag each. One ridiculous photo required."
    },
    {
      symbol: "📷",
      title: "Take one intentionally embarrassing couple photo",
      copy: "We commit completely. Zero irony. Future us will suffer."
    },
    {
      symbol: "🌧",
      title: "Rainy-day walk followed by something warm",
      copy: "Bad weather, good company, unnecessary dessert."
    },
    {
      symbol: "🎨",
      title: "Make something terrible together",
      copy: "Painting, pottery, baking, anything. Skill level: irrelevant."
    }
  ];

  let futureIndex = 1;
  const futureCard = document.getElementById("futureCard");
  document.getElementById("futureBtn").addEventListener("click", () => {
    const memory = futures[Math.floor(Math.random() * futures.length)];
    futureIndex += 1;
    futureCard.animate(
      [
        { opacity: .3, transform: "translateY(8px) scale(.98)" },
        { opacity: 1, transform: "translateY(0) scale(1)" }
      ],
      { duration: 430, easing: "cubic-bezier(.16,1,.3,1)" }
    );

    futureCard.innerHTML = `
      <div class="future-card-top">
        <span>FUTURE MEMORY #${String(futureIndex).padStart(3, "0")}</span>
        <span>STATUS: PENDING ♥</span>
      </div>
      <div class="future-visual">
        <span class="future-symbol">${memory.symbol}</span>
      </div>
      <h3>${memory.title}</h3>
      <p>${memory.copy}</p>
    `;
  });

  // Scientific obsession meter
  const meterFill = document.getElementById("meterFill");
  const meterKnob = document.getElementById("meterKnob");
  const meterResult = document.getElementById("meterResult");

  document.getElementById("meterBtn").addEventListener("click", () => {
    meterFill.style.width = "100%";
    meterKnob.style.left = "100%";
    meterResult.textContent = "ERROR: measurement exceeded safe boyfriend limits. Result: you win.";
  });

  // Hold-to-open letter
  const holdButton = document.getElementById("holdButton");
  const holdProgress = document.getElementById("holdProgress");
  const finalLetter = document.getElementById("finalLetter");

  let holdStart = 0;
  let frame = 0;
  let opened = false;
  const required = 2000;

  function resetHold() {
    if (opened) return;
    cancelAnimationFrame(frame);
    holdStart = 0;
    holdProgress.style.width = "0%";
  }

  function tick() {
    if (!holdStart || opened) return;
    const elapsed = performance.now() - holdStart;
    const progress = Math.min(1, elapsed / required);
    holdProgress.style.width = `${progress * 100}%`;

    if (progress >= 1) {
      opened = true;
      holdProgress.style.width = "100%";
      holdButton.querySelector(".hold-label").textContent = "Letter unlocked ♥";
      finalLetter.hidden = false;
      finalLetter.animate(
        [
          { opacity: 0, transform: "translateY(18px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 650, easing: "cubic-bezier(.16,1,.3,1)" }
      );
      setTimeout(() => finalLetter.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
      return;
    }

    frame = requestAnimationFrame(tick);
  }

  function startHold(event) {
    if (opened) return;
    event.preventDefault();
    holdStart = performance.now();
    frame = requestAnimationFrame(tick);
  }

  holdButton.addEventListener("pointerdown", startHold);
  ["pointerup", "pointerleave", "pointercancel"].forEach((type) => {
    holdButton.addEventListener(type, resetHold);
  });
  holdButton.addEventListener("keydown", (event) => {
    if ((event.key === " " || event.key === "Enter") && !holdStart) startHold(event);
  });
  holdButton.addEventListener("keyup", resetHold);
})();
