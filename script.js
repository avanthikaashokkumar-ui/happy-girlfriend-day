
(() => {
  const canvas = document.getElementById("sky");
  const ctx = canvas.getContext("2d");
  let stars = [];

  const phrase = "HAPPYGIRLFRIENDSDAY";
  const reasons = [
  "You were the first person I thought of when I heard the word bangaram.",
  "You are the epitome of being precious to me.",
  "You let me be myself, fully and unapologetically.",
  "I don’t feel like I have to pretend around you.",
  "You make me feel safe in a way I can’t explain.",
  "You understand parts of me I struggle to put into words.",
  "You make ordinary moments feel special.",
  "Your presence feels like home to me.",
  "I love the way you care, even in small ways.",
  "You make me want to become a better person.",
  "You are not just someone I love; you are someone I choose every single day no matter what.",
  "I can laugh with you about the dumbest things.",
  "I can be serious with you about the deepest things.",
  "You make me feel seen.",
  "You make me feel wanted.",
  "You make me feel understood.",
  "I love your heart.",
  "I love your mind.",
  "I love your patience.",
  "I love your strength.",
  "I love how you can be both gentle and stubborn.",
  "I love the way you make me feel calm.",
  "Even when we argue, I still want us.",
  "Even when things are hard, leaving you never feels like the answer.",
  "You are my favorite person to talk to.",
  "You are my favorite person to annoy.",
  "You are my favorite person to miss.",
  "You are my favorite person to come back to.",
  "I love the way you make me smile without even trying.",
  "I love the little things about you that you probably don’t even notice.",
  "I love how real you are with me.",
  "I love that you know me beyond the version everyone else sees.",
  "You make love feel personal, not performative.",
  "You make me feel like I matter.",
  "You make my life softer.",
  "You make my bad days easier.",
  "You make my good days better.",
  "I don’t want a life where you become just a memory.",
  "I don’t want to imagine someone else in your place.",
  "I trust what we have.",
  "I believe in us, even when things are not perfect.",
  "You are worth the effort.",
  "You are worth the distance.",
  "You are worth the hard conversations.",
  "You are worth choosing again and again.",
  "I don’t want temporary when I have something this real.",
  "I don’t want easy if it means losing you.",
  "I don’t just love the idea of you; I love you.",
  "You are my bangaram, my person, my safe place.",
  "And the biggest reason I would never leave you is because my heart knows exactly where it belongs: with you.",
  "Because you make me feel like I can breathe easier.",
  "Because loving you feels natural, not forced.",
  "Because you make me feel accepted even on days I don’t accept myself.",
  "Because you are the person I want to tell everything to first.",
  "Because your happiness genuinely matters to me.",
  "Because I care about your pain like it’s my own.",
  "Because you make me want to stay, even when life gets complicated.",
  "Because you are not replaceable to me.",
  "Because nobody has your exact heart.",
  "Because nobody makes me feel the way you do.",
  "Because I love how comfortable I am with you.",
  "Because I can be weird with you and not feel judged.",
  "Because you make silence feel peaceful instead of awkward.",
  "Because even your little habits mean something to me.",
  "Because I love learning more about you.",
  "Because I want to keep growing with you.",
  "Because I want to see every version of you.",
  "Because I want to be there for your best days.",
  "Because I want to be there for your worst days too.",
  "Because I don’t want love that disappears when things get hard.",
  "Because you are my favorite hello.",
  "Because you are my hardest goodbye.",
  "Because I miss you even after I just saw you.",
  "Because your voice can change my whole mood.",
  "Because your texts make me smile like an idiot.",
  "Because you make my heart feel full.",
  "Because you make me feel lucky.",
  "Because you remind me that love can be soft.",
  "Because you remind me that love can be safe.",
  "Because you remind me that love can be real.",
  "Because I love your flaws, not just your perfect moments.",
  "Because I don’t expect you to be perfect.",
  "Because I want to understand you, not judge you.",
  "Because I want to protect what we have.",
  "Because I know losing you would hurt more than any argument.",
  "Because I would rather fix things with you than start over with someone else.",
  "Because our connection means too much to give up on easily.",
  "Because I don’t see you as temporary.",
  "Because you feel like someone I was meant to meet.",
  "Because you make love feel worth it.",
  "Because I love the way you look at me.",
  "Because I love the way you care even when you try to hide it.",
  "Because I love your soft side.",
  "Because I love your dramatic side too.",
  "Because I love your attitude, even when it annoys me.",
  "Because I love how you are completely yourself.",
  "Because you make me feel like I belong somewhere.",
  "Because you make my world feel less lonely.",
  "Because you are my peace in a loud world.",
  "Because you are my comfort after a long day.",
  "Because I want to see you achieve everything you dream of.",
  "Because I want to clap for you when you win.",
  "Because I want to hold you when things don’t go your way.",
  "Because I want to be someone you can depend on.",
  "Because I want to be consistent for you.",
  "Because I want to love you properly.",
  "Because I want to keep choosing you, not just saying it.",
  "Because I want to prove love through actions, not only words.",
  "Because you deserve someone who stays.",
  "Because you deserve someone who tries.",
  "Because I love the way you make simple things memorable.",
  "Because even random moments with you become important to me.",
  "Because every place feels better when you’re there.",
  "Because every song somehow reminds me of you.",
  "Because I see you in the smallest things.",
  "Because I don’t want to imagine my future without you in it.",
  "Because when I think of love, I think of you.",
  "Because when I think of home, I think of you.",
  "Because when I think of comfort, I think of you.",
  "Because when I think of forever, I hope it has you in it.",
  "Because you make me feel emotionally close to someone in a way I didn’t know I needed.",
  "Because I trust you with the real me.",
  "Because I feel like I can be honest with you.",
  "Because I don’t have to be “strong” all the time with you.",
  "Because you make me feel human.",
  "Because you make me feel loved in ways I remember.",
  "Because your care stays with me.",
  "Because your words matter to me.",
  "Because your mood matters to me.",
  "Because your presence matters to me.",
  "Because I love you beyond just the good days.",
  "Because I love you even when we misunderstand each other.",
  "Because I love you enough to learn how to love you better.",
  "Because I don’t want to run from problems; I want to solve them with you.",
  "Because I know what we have is rare.",
  "Because you are not just another person in my life.",
  "Because you are one of the most important people in my heart.",
  "Because I would rather have one real love with you than anything fake with someone else.",
  "Because you make loyalty feel easy.",
  "Because you make staying feel worth it.",
  "Because your heart is something I never want to take for granted.",
  "Because you have become a part of my everyday thoughts.",
  "Because you make me feel connected even when we are apart.",
  "Because I want to keep making memories with you.",
  "Because I want to keep laughing with you.",
  "Because I want to keep annoying you.",
  "Because I want to keep loving you through every season.",
  "Because you are my bangaram in a way nobody else could be.",
  "Because I don’t want anyone else to be “my person.”",
  "Because at the end of everything, I still choose you."
];

  const mainReasons = phrase.split("").map((letter, index) => ({
    id: index + 1,
    letter,
    reason: reasons[index]
  }));

  const extraReasons = reasons.slice(phrase.length);

  const mainPositions = [
    { x: 8, y: 14 }, { x: 18, y: 12 }, { x: 28, y: 16 }, { x: 38, y: 12 }, { x: 50, y: 14 },
    { x: 13, y: 35 }, { x: 22, y: 32 }, { x: 31, y: 36 }, { x: 39, y: 32 }, { x: 47, y: 36 }, { x: 55, y: 32 }, { x: 64, y: 35 }, { x: 73, y: 32 }, { x: 81, y: 36 }, { x: 89, y: 32 },
    { x: 30, y: 58 }, { x: 42, y: 54 }, { x: 54, y: 58 }, { x: 66, y: 54 }
  ];

  const clusterPositions = [
    { x: 10, y: 18 }, { x: 23, y: 10 }, { x: 36, y: 20 }, { x: 48, y: 12 },
    { x: 62, y: 22 }, { x: 76, y: 12 }, { x: 88, y: 25 },
    { x: 18, y: 52 }, { x: 34, y: 40 }, { x: 50, y: 56 },
    { x: 67, y: 42 }, { x: 82, y: 55 }, { x: 40, y: 74 }, { x: 62, y: 76 }
  ];

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

  function buildMainConstellation() {
    const root = document.getElementById("mainConstellation");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 70");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.classList.add("main-svg");

    const mainPaths = [
      "M 8 14 L 18 12 L 28 16 L 38 12 L 50 14",
      "M 13 35 L 22 32 L 31 36 L 39 32 L 47 36 L 55 32 L 64 35 L 73 32 L 81 36 L 89 32",
      "M 30 58 L 42 54 L 54 58 L 66 54",
      "M 18 12 L 22 32 M 28 16 L 31 36 M 38 12 L 39 32 M 50 14 L 47 36 M 64 35 L 66 54",
      "M 39 32 L 42 54 M 55 32 L 54 58"
    ];

    mainPaths.forEach((d) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      svg.appendChild(path);
    });
    root.appendChild(svg);

    mainReasons.forEach((item, index) => {
      const pos = mainPositions[index];
      const button = document.createElement("button");
      button.className = "main-star";
      button.style.left = `calc(${pos.x}% - 29px)`;
      button.style.top = `calc(${pos.y}% - 29px)`;
      button.innerHTML = '<span class="star-glyph">✦</span><span class="star-letter">' + item.letter + '</span>';
      button.addEventListener("click", () => openMainStar(button, item, index));
      root.appendChild(button);
    });
  }

  function openMainStar(button, item, index) {
    document.querySelectorAll(".main-star").forEach((el) => el.classList.toggle("active", el === button));
    const card = document.getElementById("starCard");
    card.innerHTML = `
      <span>STAR LOG · LETTER ${item.letter} · REASON #${String(index + 1).padStart(3, "0")}</span>
      <h3>${item.letter} is for…</h3>
      <p>${item.reason}</p>
    `;
  }

  function buildAtlas() {
    const groups = [];
    for (let i = 0; i < extraReasons.length; i += 14) {
      groups.push(extraReasons.slice(i, i + 14));
    }

    const atlas = document.getElementById("atlasGrid");
    atlas.innerHTML = "";

    groups.forEach((group, groupIndex) => {
      const start = phrase.length + groupIndex * 14 + 1;
      const end = phrase.length + groupIndex * 14 + group.length;
      const cluster = document.createElement("article");
      cluster.className = "cluster-card";
      cluster.innerHTML = `
        <div class="cluster-head">
          <div>
            <span class="cluster-number">CONSTELLATION ${String(groupIndex + 1).padStart(2, "0")}</span>
            <h3>More reasons in the sky</h3>
            <p>Reasons #${start}–${end}</p>
          </div>
        </div>
        <div class="cluster-sky"></div>
        <div class="cluster-info">
          <strong>Tap a star in this cluster</strong>
          <p>Every extra reason becomes its own mini constellation too.</p>
        </div>
      `;

      const sky = cluster.querySelector(".cluster-sky");
      const infoTitle = cluster.querySelector(".cluster-info strong");
      const infoText = cluster.querySelector(".cluster-info p");

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 100 85");
      svg.setAttribute("preserveAspectRatio", "none");
      svg.classList.add("cluster-svg");

      const points = clusterPositions.slice(0, group.length);
      if (points.length > 1) {
        let d = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
          d += ` L ${points[i].x} ${points[i].y}`;
        }
        const mainPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        mainPath.setAttribute("d", d);
        svg.appendChild(mainPath);
      }

      sky.appendChild(svg);

      group.forEach((reason, reasonIndex) => {
        const point = points[reasonIndex];
        const button = document.createElement("button");
        button.className = "cluster-star";
        button.style.left = `calc(${point.x}% - 15px)`;
        button.style.top = `calc(${point.y}% - 15px)`;
        button.innerHTML = '<span class="star-glyph">✦</span><span class="star-letter">' + String(start + reasonIndex) + '</span>';
        button.addEventListener("click", () => {
          cluster.querySelectorAll(".cluster-star").forEach((el) => el.classList.toggle("active", el === button));
          infoTitle.textContent = `Reason #${start + reasonIndex}`;
          infoText.textContent = reason;
        });
        sky.appendChild(button);
      });

      atlas.appendChild(cluster);
    });
  }

  resizeSky();
  drawSky();
  addEventListener("resize", resizeSky);

  buildMainConstellation();
  buildAtlas();

  document.getElementById("randomStarBtn").addEventListener("click", () => {
    const stars = [...document.querySelectorAll(".main-star")];
    const star = stars[Math.floor(Math.random() * stars.length)];
    document.getElementById("constellation").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => star.click(), 500);
  });

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

  const futures = [
    { symbol: "☾", title: "Late-night drive with a playlist we made together", copy: "Snacks acquired. Destination optional. Talking required." },
    { symbol: "🍜", title: "Try a restaurant neither of us has been to", copy: "We order at least one thing purely because the name sounds good." },
    { symbol: "🎞", title: "A movie night where we each pick one", copy: "No vetoes. This is a legally binding Girlfriend Day agreement." },
    { symbol: "☕", title: "Slow café morning with nowhere else to be", copy: "Phones down for a bit. Coffee, pastries, and people-watching." },
    { symbol: "✈", title: "A tiny trip to a place we have never seen", copy: "One bag each. One ridiculous photo required." },
    { symbol: "📷", title: "Take one intentionally embarrassing couple photo", copy: "We commit completely. Zero irony. Future us will suffer." },
    { symbol: "🌧", title: "Rainy-day walk followed by something warm", copy: "Bad weather, good company, unnecessary dessert." },
    { symbol: "🎨", title: "Make something terrible together", copy: "Painting, pottery, baking, anything. Skill level: irrelevant." }
  ];

  let futureIndex = 1;
  const futureCard = document.getElementById("futureCard");
  document.getElementById("futureBtn").addEventListener("click", () => {
    const memory = futures[Math.floor(Math.random() * futures.length)];
    futureIndex += 1;
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

  const meterFill = document.getElementById("meterFill");
  const meterKnob = document.getElementById("meterKnob");
  const meterResult = document.getElementById("meterResult");

  document.getElementById("meterBtn").addEventListener("click", () => {
    meterFill.style.width = "100%";
    meterKnob.style.left = "100%";
    meterResult.textContent = "ERROR: measurement exceeded safe girlfriend limits. Result: you win.";
  });

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
