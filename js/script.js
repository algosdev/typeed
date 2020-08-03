const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const setting = document.getElementById('level');
const word = document.getElementById('word');
const textEl = document.getElementById('text');
const level = document.getElementById('difficulty');
const controller = document.querySelector('.controller');
const screen = document.querySelector('.ongame');
const container = document.querySelector('.container');
const bgame = document.querySelector('.bgame');
let score = 0, time = 10, randWord, text, dif;
let data = ['beaching', 'bellow', 'manhandled', 'birth-sin', 'hemocoel', 'cybergeek', 'corpsicle', 'amper', 'waterward',
  'handcraft', 'composers', 'socialness', 'wormed', 'rifampicin', 'dimpsey', 'gunged', 'trisomic', 'nonsalted', 'tetrapody',
  'jeannette', 'verballing', 'thylacines', 'machaca', 'torn', 'pinyin', 'abbrev', 'consentant', 'gadded', 'dramatises', 'learns',
  'shorten', 'chivalry', 'grotty', 'lunch-time', 'dacity', 'schuman', 'preparate', 'reptilious', 'mimes', 'slackard', 'suns', 'orin',
  'detaining', 'bileful', 'beautifull', 'indorses', 'gueld', 'grape-tree', 'corking', 'fennecus', 'orthopods', 'burgh', 'unsparing',
  'larderer', 'unbishop', 'vapid', 'lectures', 'briskest', 'reemit', 'plumbite', 'yuckily', 'enforcible', 'barbated', 'slagginess',
  'inexorable', 'extending', 'trisects', 'ozaena', 'linens', 'gerant', 'legalised', 'tepe', 'zebras', 'candidates', 'mailroom',
  'broadhead', 'streaked', 'sweepers', 'carpinus', 'temulency', 'griefing', 'wanna', 'towel-rack', 'hobble', 'watertight', 'liblong',
  'dynamin', 'dumpling', 'frillier', 'gressible', 'sourpusses', 'untack', 'mysis', 'adonai', 'expounding', 'thoued', 'gleyed', 'tuart',
  'gefitinib', 'dreamed', 'opiate', 'unpeels', 'figs', 'wormless', 'backless', 'agene', 'frugality', 'ganguro', 'cebus', 'southward',
  'gorno', 'hanksite', 'upholds', 'eyeballing', 'disses', 'waitering', 'russki', 'lubricator', 'gaseously', 'partied', 'woodborer',
  'cocopah', 'exequial', 'blackisle', 'minage', 'kantele', 'shingled', 'tangue', 'sailboards', 'megayachts', 'unburnt', 'pinchot',
  'urinals', 'doctorial', 'caissons', 'entwisted', 'head-on', 'manhunt', 'discotic', 'risp', 'foreshadow', 'hypnosis', 'breathless',
  'starspot', 'ballyrag', 'jar-fly', 'beaverton', 'cryotron', 'quizzed', 'ep14', 'stalked', 'basig', 'corbelled', 'jing', 'repairers',
  'feudality', 'reblog', 'niddy', 'imbibition', 'long-armed', 'nowness', 'chapatis', 'alienating', 'untrading', 'gauze-like',
  'portiere', 'corn belt', 'shelters', 'hairen', 'unsolder', 'landings', 'wherry', 'barmaid', 'bungles', 'laodicea', 'muni',
  'half-panic', 'giuen', 'sockeyes', 'agitate', 'bean', 'parazoan', 'egoists', 'taler', 'cankery', 'subeditors', 'chawm',
  'candyman', 'transflux', 'bipyridyl', 'becum', 'exegetical', 'unpaused', 'triad', 'qwerty', 'spends', 'antum', 'honking',
  'sooking', 'snowplough', 'therapy', 'exeunted', 'astare', 'snaphance', 'lengthener', 'kneen', 'crinet', 'relit', 'twistedly',
  'rivalled', 'quantize', 'boomlike', 'oceangoing', 'nursemaids', 'thine', 'ad-revenue', 'lwei', 'pietist', 'anguishing',
  'sop', 'reilly', 'vernility', 'jyvaskyla', 'espousing', 'indevoted', 'sordamente', 'crowbar', 'ceibo', 'tituled',
  'putterer', 'zemstvos', 'aquariums', 'awfully', 'polianthes', 'glide-bomb', 'reaping', 'in-built', 'frigatoon',
  'anti-white', 'generalise', 'king-sized', 'kanuka', 'mosh', 'advenient', 'aldrin', 'dependency', 'ashen', 'quietening',
  'untie', 'check-line', 'coroutines', 'paria', 'stiffening', 'ungiltif', 'teleworked', 'tubulous', 'yibit', 'undisputed',
  'sharklike', 'hachek', 'shmatte', 'chatrooms', 'savouring', 'kinhin', 'refitment', 'invye', 'folkmote', 'pseud', 'crab',
  'digitus', 'glycosyl', 'insetting', 'besot', 'valanches', 'saxon', 'chortlers', 'modist', 'collective', 'timekeeper',
  'immurement', 'luskish', 'pokerish', 'dabblingly', 'increaseth', 'quizzing', 'nephew', 'withes', 'asperity',
  'huqa', 'opossum', 'russkis', 'rinzai', 'nebulae', 'abstractly', 'capitonyms', 'materiel', 'orlo', 'mesh-stick'];
level.addEventListener('change', () => {
  dif = level.selectedIndex;
  localStorage.setItem('level', dif);
  location.reload();
});
setting.addEventListener('click', () => {
  controller.classList.toggle('hide');
});
dif = localStorage.getItem('level');
if (level.selectedIndex == -1) {
  level.selectedIndex = 1;
  dif = level.selectedIndex;
}
else {
  if (dif == null) {
    level.selectedIndex = 1;
  }
  else {
    level.selectedIndex = dif;
  }
};
let first = (localStorage.getItem("first") === null) ? true : localStorage.getItem("first");
if (first == true) {
  setTimeout(() => {
    if (first) {
      window.onload = whenOnload();
      localStorage.setItem('first', 'false');
    }
  }, 5300);
}
else {
  whenOnload();
}
function whenOnload() {
  console.log("Loaded");
  document.querySelector(".preload-cont").style.display = "none";
  document.querySelector("body").style.overflow = "visible";
}

function start() {
  bgame.style.zIndex = "-1";
  updater();
  setInterval(() => {
    time--;
    timeEl.innerHTML = time;
    if (time === 0) {
      screen.style.display = 'none';
      container.innerHTML =
        `<h1>Time ran out</h1>
          <p>Your final score is ${score}</p>
          <button class="reload" onclick="location.reload()">
          <i class="fa fa-redo-alt fa-3x"></i></button`;
    };
  }, 1000);
  textEl.focus();
};

function updater() {
  randWord = data[(Math.floor(Math.random() * data.length))];
  word.innerHTML = randWord;
  scoreEl.innerHTML = score;
};
textEl.addEventListener('input', (e) => {
  let t = level.selectedIndex;
  text = e.target.value;
  if (text === randWord) {
    textEl.value = '';
    score++;
    if (t == 0) {
      console.log('asdasd')
      time += 8;
    } else if (t == 1) {
      time += 4;
    } else if (t == 2) {
      time += 2;
    }
    updater();
  }
});