let selectedTopic = null;
let selectedReagent = null;

const homeView = document.getElementById("home-view");
const listView = document.getElementById("list-view");
const detailView = document.getElementById("detail-view");

// elements for the home page 
const topicGrid = document.getElementById("topic-grid");
const reagentList = document.getElementById("reagent-list");
const listTopicName = document.getElementById("list-topic-name");


// elements for reagent details
const detailTopicName = document.getElementById("detail-topic-name");
const detailReagentName = document.getElementById("detail-reagent-name");
const detailTitle = document.getElementById("detail-title");
const detailSubtitle = document.getElementById("detail-subtitle");
const detailUses = document.getElementById("detail-uses");
const detailNotes = document.getElementById("detail-notes");
const detailExamples = document.getElementById("detail-examples");
const usesSection = document.getElementById("detail-uses-section");
const notesSection = document.getElementById("detail-notes-section");
const examplesSection = document.getElementById("detail-examples-section");

const backToHome = document.getElementById("back-to-home");
const backToList = document.getElementById("back-to-list");

function showPage(page) {
  document.querySelectorAll(".view").forEach(view => {
    view.classList.remove("active");
  });

  page.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function renderTopics() {
  topicGrid.innerHTML = "";

  reagentData.forEach(topic => {
    const card = document.createElement("div");
    card.className = "topic-card";

    card.innerHTML = `
      <span class="card-icon">${topic.icon}</span>
      <div class="card-title">${topic.topic}</div>
      <div class="card-count">${topic.reagents.length} reagents</div>
      <span class="card-arrow">→</span>
    `;

    card.addEventListener("click", () => {
      openTopic(topic);
    });

    topicGrid.appendChild(card);
  });
}


function openTopic(topic) {
  selectedTopic = topic;

  listTopicName.textContent = topic.topic;
  reagentList.innerHTML = "";

  topic.reagents.forEach(reagent => {
    const item = document.createElement("div");
    item.className = "reagent-item";

    item.innerHTML = `
      <div>
        <div class="reagent-item-name">${reagent.name}</div>
        <div class="reagent-item-hint">${reagent.hint}</div>
      </div>
      <span class="reagent-item-arrow">→</span>
    `;

    item.addEventListener("click", () => {
      openReagent(reagent);
    });

    reagentList.appendChild(item);
  });

  showPage(listView);
}


function openReagent(reagent) {
  selectedReagent = reagent;

  detailTopicName.textContent = selectedTopic.topic;
  detailReagentName.textContent = reagent.name;

  detailTitle.textContent = reagent.name;
  detailSubtitle.textContent = reagent.hint;
  detailUses.innerHTML = "";

  if (reagent.uses?.length) {
    reagent.uses.forEach(use => {
      const li = document.createElement("li");
      li.textContent = use;
      detailUses.appendChild(li);
    });

    usesSection.style.display = "block";
  } else {
    usesSection.style.display = "none";
  }


  if (reagent.notes) {
    detailNotes.textContent = reagent.notes;
    notesSection.style.display = "block";
  } else {
    notesSection.style.display = "none";
  }

  detailExamples.innerHTML = "";

  if (reagent.examples?.length) {
    reagent.examples.forEach(example => {
      const li = document.createElement("li");
      li.textContent = example;
      detailExamples.appendChild(li);
    });

    examplesSection.style.display = "block";
  } else {
    examplesSection.style.display = "none";
  }

  showPage(detailView);
}


backToHome.addEventListener("click", () => {
  selectedTopic = null;
  showPage(homeView);
});

backToList.addEventListener("click", () => {
  if (selectedTopic) {
    openTopic(selectedTopic);
  } else {
    showPage(homeView);
  }
});


document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  if (detailView.classList.contains("active")) {
    backToList.click();
  } else if (listView.classList.contains("active")) {
    backToHome.click();
  }
});

renderTopics();
showPage(homeView);


