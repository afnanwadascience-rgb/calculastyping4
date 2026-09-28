
const passages = {
  standard: [
    "Good typing is not about rushing. It is about building a steady rhythm, keeping your hands relaxed, and making fewer corrections. With regular practice, accuracy becomes automatic and speed follows.",
    "Clear thinking becomes easier when simple tasks feel effortless. Type one sentence at a time, watch your errors, and give yourself permission to slow down when precision matters more than speed.",
    "A useful practice session has a small goal. You might work on common letter pairs, punctuation, numbers, or a difficult row of keys. Repeat the pattern until the movement feels natural.",
    "Typing is a practical computer skill that becomes easier through consistent practice. Focus on clean keystrokes, comfortable movement, and a steady rhythm instead of trying to rush every sentence.",
    "A quiet and focused practice session can help you notice small mistakes. Read the next words carefully, keep your hands relaxed, and allow your typing speed to develop naturally.",
    "Every typing test provides useful feedback. Your speed shows how quickly you type, while accuracy reveals how consistently you reproduce the text. Use both numbers to guide your practice.",
    "Strong typing habits are built through repetition. Familiar words gradually become automatic, allowing you to spend less attention searching for keys and more attention understanding what you are writing.",
    "Typing practice does not need to be complicated. Choose a passage, start the timer, concentrate on accuracy, and review your result when the test ends.",
    "A steady rhythm is often more useful than sudden bursts of speed. When your fingers move consistently, you can maintain concentration for longer passages and make fewer unnecessary corrections.",
    "Learning to type well can make many computer tasks easier. Writing assignments, taking notes, preparing documents, and communicating online all become more comfortable when the keyboard feels familiar.",
    "Try to look slightly ahead while typing. Reading the next few words before your fingers reach them can help maintain a smooth flow and reduce pauses between words.",
    "Mistakes are part of learning. Notice which letters or combinations cause problems, practice them slowly, and then return to a normal test to see whether the movement has become easier.",
    "A good typing routine can be short and focused. Even a few minutes of deliberate practice can give you useful feedback when you pay attention to both speed and accuracy.",
    "Different passages challenge different parts of your typing ability. Familiar vocabulary may feel easy, while unusual words and punctuation can reveal areas that need more practice.",
    "Typing becomes more natural when you stop thinking about every individual key. With enough repetition, common letter patterns become familiar movements that require less conscious effort.",
    "Your typing result can change from one session to another. Concentration, passage difficulty, tiredness, and familiarity with the words can all affect a single test.",
    "Practice should remain interesting. Changing subjects and sentence structures keeps your attention active and prevents you from simply memorizing one paragraph.",
    "Accuracy is important because correcting mistakes takes additional time. A controlled pace with clean keystrokes can help you develop a stronger foundation for future speed.",
    "A comfortable workspace can make typing practice easier. Keep your keyboard at a natural position, relax your shoulders, and take a short break if your concentration begins to drop.",
    "Progress often appears gradually. You may first notice fewer mistakes, then a smoother rhythm, and eventually a higher typing speed that feels natural rather than forced.",
    "The purpose of a typing test is to learn something about your current ability. Treat the result as feedback that can guide your next practice session.",
    "Reading and typing at the same time trains two useful skills together. You learn to recognize words quickly while coordinating your fingers with the text you see.",
    "Longer passages test concentration as well as typing speed. Try to maintain the same relaxed rhythm from the beginning of the passage until the end.",
    "A difficult word does not need to interrupt your entire rhythm. Slow down for the challenging part, type it carefully, and continue with the next word.",
    "Regular practice creates familiarity with the keyboard. Over time, keys that once required searching can become predictable movements for your fingers.",
    "Typing efficiently can save time during school projects and everyday computer work. The goal is not simply to type faster, but to type comfortably and accurately.",
    "Small improvements are worth noticing. One fewer mistake, a steadier rhythm, or a slightly longer period of concentration can all indicate useful progress.",
    "A balanced practice session can include a warm-up, a timed test, and targeted work on difficult patterns. This gives your practice a clear purpose.",
    "Try not to compare every test with your fastest result. A more useful comparison is how consistently you can maintain good accuracy across different passages.",
    "Typing skill develops through coordination and repetition. Give your hands enough time to learn the patterns instead of forcing them to move faster than they comfortably can.",
    "A new paragraph should make you read rather than rely on memory. Variety is useful because it tests whether you can type unfamiliar text accurately.",
    "When your attention is focused, typing can become almost rhythmic. Read carefully, move steadily, and let familiar words flow without unnecessary hesitation."
  ],

  numbers: [
    "In 2026, a small daily habit can become a large skill. Try 10 focused minutes, then 20, and record 3 useful metrics: WPM, accuracy, and error count.",
    "Plan 5 short rounds: type 25 words, check your accuracy, rest for 20 seconds, then repeat. Numbers like 12, 47, 108, and 2026 add realistic keyboard practice.",
    "Data is easier to understand when it is consistent: 7 days, 14 sessions, 21 goals, and 42 minutes of focused work can make a practice plan simple to measure.",
    "A simple practice plan might use 3 goals: reach 40 WPM, maintain 95% accuracy, and complete 10 sessions. Record each result so you can see changes over time.",
    "A calendar has 7 days in a week, 24 hours in a day, and 60 minutes in an hour. Numbers like 7, 24, and 60 are useful for practicing the number row.",
    "Try typing this sequence carefully: 12, 24, 36, 48, 60, 72, 84, 96. Accuracy matters more than speed when you are learning unfamiliar key combinations.",
    "A project can have 4 stages: plan, practice, measure, and improve. Give each stage 15 minutes and record the result after every session.",
    "A useful data table might contain 5 columns: date, duration, WPM, accuracy, and errors. Keeping the same format makes progress easier to understand.",
    "Suppose your first result is 35 WPM and your next result is 38 WPM. The difference is 3 WPM, but accuracy should also be checked before judging the change.",
    "Numbers appear in many everyday tasks. You may type 2026 dates, 100 percent values, prices such as 250, or times such as 08:30 while working on a computer.",
    "Practice a mixed sequence: 5, 10, 15, 20, 25, 30, 35, 40. Keep your rhythm steady and try not to look away from the screen.",
    "A weekly goal might be 5 typing sessions, 150 minutes of practice, and at least 90 percent average accuracy. Adjust the numbers to match your own routine.",
    "There are 26 letters in the English alphabet, 10 digits from 0 to 9, and many punctuation symbols. A varied test can help you become comfortable with all of them.",
    "Try this calculation carefully: 18 + 24 = 42, 50 - 17 = 33, and 8 × 7 = 56. Numbers and operators can make typing practice more varied.",
    "A progress record might show 42 WPM on Monday, 44 on Wednesday, and 46 on Friday. Look at several sessions instead of relying on a single number.",
    "A focused 30 second typing test can be repeated 3 times with a short break between rounds. Record the WPM and accuracy from each attempt.",
    "When entering data, a single missing digit can change the meaning of a value. Careful typing is especially important for dates, quantities, codes, and measurements.",
    "Try these values: 125, 250, 375, 500, 625, 750, 875, and 1000. Type each number accurately before moving to the next one.",
    "A small improvement of 2 WPM repeated over 10 practice sessions can produce a noticeable difference. Consistency is more useful than one unusually fast attempt.",
    "Use realistic combinations such as 2026-09-28, 14:30, 95%, 3.14, and 1,024 when you want to challenge your number-row accuracy."
  ],

  punctuation: [
    "Good writing needs punctuation: commas, periods, colons, semicolons, quotes, brackets, and dashes. Type carefully; accuracy matters when symbols change meaning.",
    "Try this rhythm: read; think; type. Then ask, \"Did I copy every mark?\" Precision with punctuation helps when writing code, messages, notes, and school assignments.",
    "Parentheses (like these), quotation marks (\"words\"), and symbols such as &, %, +, and = can feel awkward at first. Slow practice makes them familiar.",
    "A careful writer checks every mark: commas, periods, question marks, and exclamation points. Small symbols can change the structure and meaning of a sentence.",
    "Try a mixed sentence: \"Practice slowly,\" she said, \"then increase your speed.\" Notice the comma, quotation marks, and apostrophe while keeping a steady rhythm.",
    "Punctuation practice can include brackets [like these], braces {like these}, and parentheses (like these). Each symbol requires a different keyboard movement.",
    "When a sentence ends, remember the correct mark. A period closes a statement. A question mark asks a question. An exclamation mark adds emphasis!",
    "Use a colon before a list: bring three things: patience, focus, and practice. Then use commas to separate the items clearly.",
    "Semicolons can connect closely related ideas; they are useful when a comma is not strong enough to separate two complete thoughts.",
    "An apostrophe appears in words such as \"don't,\" \"can't,\" and \"student's.\" Practice these forms carefully because the apostrophe is easy to miss.",
    "Dashes and parentheses can add extra information — but they also require careful hand movement. Try to type the whole sentence without losing your rhythm.",
    "A sentence may contain several symbols: \"Ready? Start now!\" Then add a colon: \"The goal: accurate typing.\" Practice every character.",
    "Quotation marks can surround a short phrase, while parentheses can provide additional information. Practice both forms until the keyboard movements feel natural.",
    "Some technical writing uses symbols such as @, #, $, %, &, *, and +. They can be useful for realistic keyboard practice.",
    "Good punctuation supports clear communication. Type each symbol deliberately, especially when a passage contains several marks close together.",
    "Try this sequence carefully: hello, world! How are you? I am fine; thank you. The punctuation should remain exactly where it belongs.",
    "A short command might look like this: save(); run(); check(); Each semicolon matters when typing code-like text.",
    "Use brackets to group information: [first], [second], and [third]. Then use parentheses for a separate note (practice makes patterns familiar).",
    "Punctuation becomes easier with repetition. Start slowly, pay attention to each symbol, and let your hands learn the required movements.",
    "Typing symbols accurately is useful for messages, documents, programming, mathematics, and online forms. Practice makes these keys less distracting."
  ]
};

const KEY = 'calculas-typing-v1';

const defaultState = {
  tests: [],
  settings: {
    sound: false,
    motion: false,
    contrast: false,
    soundVolume: 55,
    soundProfile: 'typewriter'
  }
};

let state = loadState();
let duration = 30;
let mode = 'standard';
let passage = '';
let started = false;
let finished = false;
let startAt = 0;
let timerId = null;
let typed = '';
let audioCtx = null;

// Keeps track of the last passage used in each mode.
// This prevents immediate repetition.
const lastPassageIndex = {
  standard: -1,
  numbers: -1,
  punctuation: -1
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}');

    return {
      ...defaultState,
      ...saved,
      settings: {
        ...defaultState.settings,
        ...(saved.settings || {})
      }
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(KEY, JSON.stringify(state));
}

/*
 * Select a random passage.
 *
 * Rules:
 * 1. Pick randomly from the current mode.
 * 2. Never immediately pick the same passage again.
 * 3. Works independently for standard, numbers and punctuation.
 */
function getRandomPassage() {
  const arr = passages[mode] || passages.standard;

  if (!arr.length) {
    return '';
  }

  if (arr.length === 1) {
    lastPassageIndex[mode] = 0;
    return arr[0];
  }

  let index;

  do {
    index = Math.floor(Math.random() * arr.length);
  } while (index === lastPassageIndex[mode]);

  lastPassageIndex[mode] = index;

  return arr[index];
}

/*
 * Select another passage for extending the current test.
 * Because getRandomPassage remembers the previous index,
 * the newly added passage will not be identical to the
 * passage selected immediately before it.
 */
function getAnotherPassage() {
  return getRandomPassage();
}

function setText(text) {
  passage = text;

  const display = $('#text-display');

  display.innerHTML = '';

  [...passage].forEach((ch, i) => {
    const span = document.createElement('span');

    span.textContent = ch;
    span.dataset.i = i;

    display.appendChild(span);
  });

  updateDisplay('');
}

function updateDisplay(value) {
  typed = value;

  const spans = $$('#text-display span');

  let correct = 0;
  let errors = 0;

  spans.forEach((sp, i) => {
    sp.className = '';

    if (i < value.length) {
      if (value[i] === passage[i]) {
        sp.className = 'correct';
        correct++;
      } else {
        sp.className = 'incorrect';
        errors++;
      }
    } else if (
      i === value.length &&
      started &&
      !finished
    ) {
      sp.className = 'current';
    }
  });

  const accuracy = value.length
    ? Math.max(
        0,
        Math.round((correct / value.length) * 100)
      )
    : 100;

  $('#accuracy-value').textContent = accuracy;

  const elapsed = started
    ? Math.max(0, (Date.now() - startAt) / 1000)
    : 0;

  const minutes = Math.max(elapsed / 60, 1 / 60);

  const wpm = Math.round(
    correct / 5 / minutes
  );

  $('#wpm-value').textContent =
    Number.isFinite(wpm) ? wpm : 0;

  return {
    correct,
    errors,
    accuracy,
    wpm,
    elapsed
  };
}

function begin() {
  if (timerId) {
    clearInterval(timerId);
  }

  timerId = null;

  // NEW RANDOM PASSAGE EVERY TEST
  passage = getRandomPassage();

  setText(passage);

  started = false;
  finished = false;
  startAt = 0;

  const input = $('#typing-input');

  input.disabled = false;
  input.value = '';
  input.focus();

  $('#status-message').textContent =
    'Type the passage above. The timer starts with your first key.';

  $('#time-value').textContent = duration;

  $('#timer-progress').style.width = '100%';
}

function ensureStart() {
  if (started || finished) {
    return;
  }

  started = true;
  startAt = Date.now();

  $('#test-status-dot').classList.add('live');
  $('#test-status-label').textContent = 'Typing';

  if (timerId) {
    clearInterval(timerId);
  }

  timerId = setInterval(tick, 100);
}

function extendPassage() {
  const addition = ' ' + getAnotherPassage();

  passage += addition;

  const display = $('#text-display');

  const startIndex = display.children.length;

  [...addition].forEach((ch, i) => {
    const span = document.createElement('span');

    span.textContent = ch;
    span.dataset.i = startIndex + i;

    display.appendChild(span);
  });
}

function tick() {
  if (!started || finished) {
    return;
  }

  const left = Math.max(
    0,
    duration - (Date.now() - startAt) / 1000
  );

  $('#time-value').textContent = Math.ceil(left);

  $('#timer-progress').style.width =
    (left / duration * 100) + '%';

  updateDisplay($('#typing-input').value);

  if (left <= 0) {
    finish();
  }
}

function finish() {
  if (finished) {
    return;
  }

  finished = true;

  clearInterval(timerId);
  timerId = null;

  // Calculate the result before setting started=false.
  const result = updateDisplay(
    $('#typing-input').value
  );

  started = false;

  $('#typing-input').disabled = true;

  $('#test-status-dot').classList.remove('live');
  $('#test-status-label').textContent = 'Complete';

  const entered = $('#typing-input').value;
  const mistakeMap = {};

  for (let i = 0; i < entered.length; i++) {
    if (entered[i] !== passage[i]) {
      const expected = passage[i];

      if (expected && /[A-Za-z]/.test(expected)) {
        const key = expected.toLowerCase();

        mistakeMap[key] =
          (mistakeMap[key] || 0) + 1;
      }
    }
  }

  const record = {
    date: new Date().toISOString(),
    wpm: result.wpm,
    accuracy: result.accuracy,
    correct: result.correct,
    errors: result.errors,
    duration,
    mode,
    time: result.elapsed,
    mistakes: mistakeMap
  };

  state.tests.push(record);

  if (state.tests.length > 100) {
    state.tests.shift();
  }

  saveState();

  renderStats();
  renderProgress();

  $('#result-wpm').textContent = result.wpm;
  $('#result-accuracy').textContent =
    result.accuracy + '%';

  $('#result-correct').textContent =
    result.correct;

  $('#result-errors').textContent =
    result.errors;

  $('#result-message').textContent =
    result.accuracy >= 97
      ? 'Excellent control. Keep the rhythm and protect that accuracy.'
      : result.accuracy >= 90
        ? 'Solid session. Practice the error patterns below to make your speed more reliable.'
        : 'Slow down slightly and focus on clean keystrokes. Accuracy first, then build speed.';

  $('#result-dialog').showModal();
}

function reset() {
  if (timerId) {
    clearInterval(timerId);
  }

  timerId = null;
  started = false;
  finished = false;

  $('#typing-input').value = '';
  $('#typing-input').disabled = true;

  $('#time-value').textContent = '0';
  $('#wpm-value').textContent = '0';
  $('#accuracy-value').textContent = '100';

  $('#timer-progress').style.width = '100%';

  setText(
    'Press Start to load a typing passage.'
  );

  $('#status-message').textContent =
    'Press Start to begin.';
}

const ignoredKeys = new Set([
  'Shift',
  'Control',
  'Alt',
  'Meta',
  'CapsLock',
  'Tab',
  'Escape',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight'
]);

function ensureAudio() {
  try {
    if (!audioCtx) {
      audioCtx =
        new (window.AudioContext ||
          window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    return audioCtx;
  } catch {
    return null;
  }
}

function makeNoiseBuffer(
  ctx,
  duration = 0.035
) {
  const length = Math.max(
    1,
    Math.floor(ctx.sampleRate * duration)
  );

  const buffer =
    ctx.createBuffer(
      1,
      length,
      ctx.sampleRate
    );

  const data =
    buffer.getChannelData(0);

  for (let i = 0; i < length; i++) {
    data[i] =
      (Math.random() * 2 - 1) *
      (1 - i / length);
  }

  return buffer;
}

function playKeySound(
  key,
  force = false
) {
  if (
    (!state.settings.sound && !force) ||
    ignoredKeys.has(key)
  ) {
    return;
  }

  const ctx = ensureAudio();

  if (!ctx) {
    return;
  }

  const now = ctx.currentTime;

  const volume = Math.max(
    0,
    Math.min(
      1,
      (Number(
        state.settings.soundVolume
      ) ?? 55) / 100
    )
  );

  if (volume === 0) {
    return;
  }

  const profile =
    state.settings.soundProfile ||
    'typewriter';

  const accent = key === 'Backspace';

  try {
    const master =
      ctx.createGain();

    master.gain.setValueAtTime(
      (0.12 + volume * 0.12) *
        (force ? 1.1 : 1),
      now
    );

    master.gain.exponentialRampToValueAtTime(
      0.001,
      now +
        (profile === 'soft'
          ? 0.045
          : 0.075)
    );

    master.connect(ctx.destination);

    const noise =
      ctx.createBufferSource();

    noise.buffer = makeNoiseBuffer(
      ctx,
      profile === 'soft'
        ? 0.025
        : 0.04
    );

    const filter =
      ctx.createBiquadFilter();

    filter.type = 'bandpass';

    filter.frequency.value =
      profile === 'mechanical'
        ? 1800
        : profile === 'soft'
          ? 1200
          : 1450;

    filter.Q.value = 0.8;

    noise.connect(filter);
    filter.connect(master);

    noise.start(now);
    noise.stop(now + 0.05);

    const osc =
      ctx.createOscillator();

    const body =
      ctx.createGain();

    osc.type =
      profile === 'mechanical'
        ? 'square'
        : 'triangle';

    osc.frequency.setValueAtTime(
      accent
        ? 145
        : (
            profile === 'soft'
              ? 235
              : profile === 'mechanical'
                ? 185
                : 210
          ) +
          Math.random() * 45,
      now
    );

    osc.frequency.exponentialRampToValueAtTime(
      accent ? 95 : 115,
      now + 0.05
    );

    body.gain.setValueAtTime(
      profile === 'soft'
        ? 0.13
        : 0.2,
      now
    );

    body.gain.exponentialRampToValueAtTime(
      0.001,
      now + 0.06
    );

    osc.connect(body);
    body.connect(master);

    osc.start(now);
    osc.stop(now + 0.065);

    if (
      profile === 'typewriter' &&
      !accent
    ) {
      const thump =
        ctx.createOscillator();

      const tg =
        ctx.createGain();

      thump.type = 'sine';

      thump.frequency.value =
        92 + Math.random() * 10;

      tg.gain.setValueAtTime(
        0.13,
        now
      );

      tg.gain.exponentialRampToValueAtTime(
        0.001,
        now + 0.055
      );

      thump.connect(tg);
      tg.connect(master);

      thump.start(now);
      thump.stop(now + 0.06);
    }
  } catch {}
}

function syncSoundUI() {
  const enabled =
    !!state.settings.sound;

  $('#sound-status').textContent =
    enabled
      ? 'Sound on'
      : 'Sound off';

  $('#sound-status').classList.toggle(
    'on',
    enabled
  );

  $('#sound-volume').value =
    Number(
      state.settings.soundVolume ?? 55
    );

  $('#sound-volume-label').textContent =
    `${Number(
      state.settings.soundVolume ?? 55
    )}%`;

  $('#sound-profile').value =
    state.settings.soundProfile ||
    'typewriter';

  $('#sound-switch').setAttribute(
    'aria-checked',
    String(enabled)
  );
}

function renderStats() {
  const tests = state.tests;

  const best = tests.length
    ? Math.max(
        ...tests.map(x => x.wpm)
      )
    : 0;

  const last = tests.at(-1);

  $('#best-wpm').textContent =
    best;

  $('#tests-count').textContent =
    tests.length;

  $('#accuracy-stat').textContent =
    last
      ? last.accuracy + '%'
      : '—';
}

function renderProgress() {
  const tests = state.tests;

  const avg = tests.length
    ? Math.round(
        tests.reduce(
          (a, x) => a + x.wpm,
          0
        ) / tests.length
      )
    : 0;

  const acc = tests.length
    ? Math.round(
        tests.reduce(
          (a, x) => a + x.accuracy,
          0
        ) / tests.length
      )
    : 0;

  const secs =
    tests.reduce(
      (a, x) => a + x.time,
      0
    );

  const best = tests.length
    ? Math.max(
        ...tests.map(x => x.wpm)
      )
    : 0;

  $('#progress-best').textContent =
    best;

  $('#progress-average').textContent =
    avg;

  $('#progress-accuracy').textContent =
    acc + '%';

  $('#progress-time').textContent =
    Math.round(secs / 60) + 'm';

  const hist =
    [...tests]
      .slice(-12)
      .reverse();

  $('#history-list').innerHTML =
    hist.length
      ? hist
          .map(
            x =>
              `<div class="history-row">
                <span>${new Date(
                  x.date
                ).toLocaleString()}</span>
                <strong>${x.wpm} WPM</strong>
                <span>${x.accuracy}%</span>
                <span>${x.mode}</span>
              </div>`
          )
          .join('')
      : '<div class="empty">Complete a test to see your history.</div>';

  const streak =
    calcStreak();

  $('#streak-value').textContent =
    streak +
    ' day' +
    (streak === 1
      ? ''
      : 's') +
    ' streak';

  drawChart();
}

function calcStreak() {
  const days =
    new Set(
      state.tests.map(
        x =>
          new Date(x.date)
            .toISOString()
            .slice(0, 10)
      )
    );

  let d = new Date();
  let n = 0;

  while (
    days.has(
      d.toISOString().slice(0, 10)
    )
  ) {
    n++;

    d.setDate(
      d.getDate() - 1
    );
  }

  return n;
}

function drawChart() {
  const c =
    $('#progress-chart');

  const ctx =
    c.getContext('2d');

  const rect =
    c.getBoundingClientRect();

  const dpr =
    devicePixelRatio || 1;

  c.width =
    rect.width * dpr;

  c.height =
    260 * dpr;

  ctx.setTransform(
    dpr,
    0,
    0,
    dpr,
    0,
    0
  );

  ctx.clearRect(
    0,
    0,
    rect.width,
    260
  );

  const vals =
    state.tests
      .slice(-12)
      .map(x => x.wpm);

  if (!vals.length) {
    $('#history-empty').style.display =
      'block';

    return;
  }

  $('#history-empty').style.display =
    'none';

  const w = rect.width;
  const h = 240;
  const p = 24;

  const min = 0;

  const max =
    Math.max(
      20,
      ...vals
    );

  ctx.strokeStyle =
    '#27352f';

  ctx.lineWidth = 1;

  for (let i = 0; i < 4; i++) {
    const y =
      20 + i * 55;

    ctx.beginPath();
    ctx.moveTo(p, y);
    ctx.lineTo(w - p, y);
    ctx.stroke();
  }

  ctx.strokeStyle =
    '#8ee38f';

  ctx.lineWidth = 3;

  ctx.beginPath();

  vals.forEach(
    (v, i) => {
      const x =
        vals.length === 1
          ? w / 2
          : p +
            i *
              (w - 2 * p) /
              (vals.length - 1);

      const y =
        220 -
        (v / max) * 180;

      if (i) {
        ctx.lineTo(x, y);
      } else {
        ctx.moveTo(x, y);
      }
    }
  );

  ctx.stroke();

  ctx.fillStyle =
    '#8ee38f';

  vals.forEach(
    (v, i) => {
      const x =
        vals.length === 1
          ? w / 2
          : p +
            i *
              (w - 2 * p) /
              (vals.length - 1);

      const y =
        220 -
        (v / max) * 180;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        4,
        0,
        Math.PI * 2
      );

      ctx.fill();
    }
  );
}

function renderWeaknesses() {
  const chars = {};

  state.tests.forEach(t => {
    for (
      const [ch, n]
      of Object.entries(
        t.mistakes || {}
      )
    ) {
      chars[ch] =
        (chars[ch] || 0) + n;
    }
  });

  const commonPairs = [
    'th',
    'he',
    'in',
    'er',
    'an',
    're',
    'on',
    'at',
    'to',
    'it'
  ];

  const pairScores = {};

  commonPairs.forEach(pair => {
    pairScores[pair] =
      (chars[pair[0]] || 0) +
      (chars[pair[1]] || 0);
  });

  const base =
    Object.entries(pairScores)
      .sort((a, b) => b[1] - a[1])
      .filter(([, n]) => n > 0)
      .slice(0, 3);

  const fallback = [
    ['th', 0],
    ['er', 0],
    ['in', 0]
  ];

  const items =
    base.length
      ? base
      : fallback;

  $('#weakness-grid').innerHTML =
    items
      .map(
        ([p, n]) =>
          `<article class="card weak-card">
            <div class="pattern">${p}</div>
            <p>
              ${
                n
                  ? 'This pattern appeared in your recent error profile. Repeat it slowly, then retest.'
                  : 'A common letter pair worth practicing for smooth hand movement.'
              }
            </p>
            <button
              class="secondary-btn"
              data-pattern="${p}">
              Practice ${p}
            </button>
          </article>`
      )
      .join('');

  $$('#weakness-grid button')
    .forEach(
      b =>
        b.addEventListener(
          'click',
          () =>
            startPattern(
              b.dataset.pattern
            )
        )
    );
}

function startPattern(pattern) {
  showView('test');

  const repeats =
    Array.from(
      { length: 8 },
      () => pattern
    ).join(' ') +
    ` — ${pattern} ${pattern} ${pattern}.`;

  setText(repeats);

  duration = 30;
  started = false;
  finished = false;
  startAt = 0;

  if (timerId) {
    clearInterval(timerId);
  }

  timerId = null;

  $('#typing-input').disabled =
    false;

  $('#typing-input').value =
    '';

  $('#typing-input').focus();

  $('#status-message').textContent =
    `Focused practice: ${pattern}. Timer starts with your first key.`;

  $('#time-value').textContent =
    duration;

  $('#timer-progress').style.width =
    '100%';

  showToast(
    `Practice ${pattern}`
  );
}

function showView(view) {
  $$('.view').forEach(
    v =>
      v.classList.toggle(
        'active',
        v.id ===
          'view-' + view
      )
  );

  $$('.nav-btn').forEach(
    b =>
      b.classList.toggle(
        'active',
        b.dataset.view ===
          view
      )
  );

  if (view === 'practice') {
    renderWeaknesses();
  }

  if (view === 'progress') {
    renderProgress();
  }
}

function showToast(msg) {
  const t = $('#toast');

  t.textContent = msg;

  t.classList.add('show');

  setTimeout(
    () =>
      t.classList.remove(
        'show'
      ),
    1800
  );
}

// Navigation
$$('.nav-btn').forEach(
  b =>
    b.addEventListener(
      'click',
      () =>
        showView(
          b.dataset.view
        )
    )
);

// Duration selector
$$(
  '.segment[data-duration]'
).forEach(
  b =>
    b.addEventListener(
      'click',
      () => {
        $$('.segment[data-duration]')
          .forEach(
            x =>
              x.classList.remove(
                'active'
              )
          );

        b.classList.add(
          'active'
        );

        duration =
          Number(
            b.dataset.duration
          );

        reset();
      }
    )
);

// Mode selector
$$(
  '.segment[data-mode]'
).forEach(
  b =>
    b.addEventListener(
      'click',
      () => {
        $$('.segment[data-mode]')
          .forEach(
            x =>
              x.classList.remove(
                'active'
              )
          );

        b.classList.add(
          'active'
        );

        mode =
          b.dataset.mode;

        reset();
      }
    )
);

// Start
$('#start-btn').addEventListener(
  'click',
  () => {
    begin();
  }
);

// Reset
$('#reset-btn').addEventListener(
  'click',
  reset
);

// Typing input
$('#typing-input').addEventListener(
  'input',
  e => {
    ensureStart();

    const v =
      e.target.value;

    /*
     * Add another RANDOM passage before
     * the user reaches the end.
     */
    if (
      v.length >=
      passage.length - 80
    ) {
      extendPassage();
    }

    updateDisplay(v);
  }
);

// Key sounds
$('#typing-input').addEventListener(
  'keydown',
  e => {
    playKeySound(e.key);

    if (
      e.key === 'Tab' &&
      !e.shiftKey
    ) {
      e.preventDefault();
    }
  }
);

// Keyboard shortcuts
document.addEventListener(
  'keydown',
  e => {
    if (
      e.key === 'Enter' &&
      e.ctrlKey
    ) {
      reset();
      begin();
    }

    if (
      e.key === 'Tab' &&
      document.activeElement !==
        $('#typing-input')
    ) {
      if (
        e.key === 'Tab' &&
        document.activeElement ===
          $('#start-btn')
      ) {
        setTimeout(
          () =>
            $('#typing-input').focus(),
          0
        );
      }
    }
  }
);

// Result dialog
$('#close-result').addEventListener(
  'click',
  () =>
    $('#result-dialog').close()
);

$('#result-retry').addEventListener(
  'click',
  () => {
    $('#result-dialog').close();

    showView('test');

    // New random passage.
    begin();
  }
);

$('#result-practice').addEventListener(
  'click',
  () => {
    $('#result-dialog').close();

    showView('practice');

    renderWeaknesses();
  }
);

$('#practice-start').addEventListener(
  'click',
  () => {
    showView('test');

    begin();
  }
);

// Clear progress
$('#clear-progress').addEventListener(
  'click',
  () => {
    if (
      confirm(
        'Clear all locally stored Calculas Typing progress?'
      )
    ) {
      state.tests = [];

      saveState();

      renderStats();
      renderProgress();
      renderWeaknesses();

      showToast(
        'Progress cleared'
      );
    }
  }
);

// Sound toggle
$('#sound-toggle').addEventListener(
  'change',
  e => {
    state.settings.sound =
      e.target.checked;

    syncSoundUI();

    saveState();
  }
);

// Visual sound switch
$('#sound-switch').addEventListener(
  'click',
  () => {
    $('#sound-toggle').checked =
      !$('#sound-toggle').checked;

    $('#sound-toggle').dispatchEvent(
      new Event(
        'change',
        {
          bubbles: true
        }
      )
    );
  }
);

// Keyboard sound switch
$('#sound-switch').addEventListener(
  'keydown',
  e => {
    if (
      e.key === 'Enter' ||
      e.key === ' '
    ) {
      e.preventDefault();

      $('#sound-toggle').checked =
        !$('#sound-toggle').checked;

      $('#sound-toggle').dispatchEvent(
        new Event(
          'change',
          {
            bubbles: true
          }
        )
      );
    }
  }
);

// Sound volume
$('#sound-volume').addEventListener(
  'input',
  e => {
    state.settings.soundVolume =
      Number(e.target.value);

    syncSoundUI();

    saveState();
  }
);

// Sound profile
$('#sound-profile').addEventListener(
  'change',
  e => {
    state.settings.soundProfile =
      e.target.value;

    saveState();

    syncSoundUI();
  }
);

// Sound preview
$('#sound-preview').addEventListener(
  'click',
  () =>
    playKeySound(
      'a',
      true
    )
);

// Motion
$('#motion-toggle').addEventListener(
  'change',
  e => {
    state.settings.motion =
      e.target.checked;

    document.body.classList.toggle(
      'reduced-motion',
      e.target.checked
    );

    saveState();
  }
);

// Contrast
$('#contrast-toggle').addEventListener(
  'change',
  e => {
    state.settings.contrast =
      e.target.checked;

    document.body.classList.toggle(
      'high-contrast',
      e.target.checked
    );

    saveState();
  }
);

window.addEventListener(
  'resize',
  drawChart
);

// Restore settings
$('#sound-toggle').checked =
  state.settings.sound;

$('#motion-toggle').checked =
  state.settings.motion;

$('#contrast-toggle').checked =
  state.settings.contrast;

document.body.classList.toggle(
  'reduced-motion',
  state.settings.motion
);

document.body.classList.toggle(
  'high-contrast',
  state.settings.contrast
);

syncSoundUI();

// Initial UI
setText(
  'Press Start to load a typing passage.'
);

renderStats();
renderProgress();
renderWeaknesses();

