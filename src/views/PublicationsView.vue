<script setup>
import { reactive, ref } from "vue";
import oboe from "oboe"; // ajax support

// import newsdata from '../data/news.json'

const publications = reactive({ papers: [], preprints: [] });

oboe("/data/publications.json?nocache=" + new Date().getTime()) // don't cache the json file
  .node("peer-reviewed.*", (entry) => {
    entry["abstract_shown"] = false;
    entry["citation_shown"] = false;
    entry["abstract_label"] = "show abstract";
    // get if it's the first entry from a particular year
    const first =
      publications.papers.filter((p) => p.year === entry.year).length === 0;
    entry["first"] = first;

    // get rid of any links where url is empty
    entry["links"] = entry.links.filter((l) => l.url !== "");

    publications.papers.push(entry);
  })
  .node("preprints.*", (entry) => {
    entry["abstract_shown"] = false;
    entry["citation_shown"] = false;
    entry["abstract_label"] = "show abstract";
    // get if it's the first entry from a particular year
    const first =
      publications.papers.filter((p) => p.year === entry.year).length === 0;
    entry["first"] = first;

    // get rid of any links where url is empty
    entry["links"] = entry.links.filter((l) => l.url !== "");

    publications.preprints.push(entry);
  });

const abstractExpanded = ref(false);

const ExpandAbstract = function (title) {
  // find paper with title, in either papers or preprints
  let paper;
  paper = publications.papers.find((p) => p.title === title);
  if (paper === undefined) {
    paper = publications.preprints.find((p) => p.title === title);
  }

  // change publications so that abstract is shown
  paper.abstract_shown = !paper.abstract_shown;
  if (paper.abstract_shown) {
    paper.abstract_label = "hide abstract";
  } else {
    paper.abstract_label = "show abstract";
  }
};

// go to URL in new tab
const GoTo = function (url) {
  window.open(url, "_blank");
};
</script>

<template>
  <div class="page">
    <div class="title has-text-center">Preprints & Under Review</div>

    <div v-for="i in publications.preprints" class="has-text-left is-size-5">
      <div class="card-container">
        <div class="card is-shadowless">
          <div class="card-content">
            <div class="columns">
              <div class="column is-1">
                <div v-if="i.first" class="has-text-weight-bold"></div>
              </div>
              <div class="column is-10">
                <p class="main has-text-left">
                  <span v-html="i.full_citation"></span>
                </p>
                <!-- <p class="main has-text-left"><strong>{{ i.title }}</strong></p>
                    <p class="authors has-text-left">{{ i.authors }}</p>
                    <p class="year has-text-left"><i>{{ i.journal }}</i> ({{ i.year }})</p> -->

                <div class="field has-addons">
                  <p class="control" v-if="i.abstract !== ''">
                    <button class="button" @click="ExpandAbstract(i.title)">
                      {{ i.abstract_label }}
                    </button>
                  </p>
                  <template v-for="link in i.links">
                    <p class="control">
                      <button class="button" @click="GoTo(link.url)">
                        {{ link.name }}
                      </button>
                    </p>
                  </template>
                </div>

                <article class="message" v-if="i.abstract_shown">
                  <div class="message-body">
                    {{ i.abstract }}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="title has-text-center">Publications</div>
    <div v-for="i in publications.papers" class="has-text-left is-size-5">
      <div class="card-container">
        <div class="card is-shadowless">
          <div class="card-content">
            <div class="columns">
              <div class="column is-1">
                <div v-if="i.first" class="has-text-weight-bold">
                  {{ i.year }}
                </div>
              </div>
              <div class="column is-10">
                <p class="main has-text-left">
                  <span v-html="i.full_citation"></span>
                </p>
                <!-- <p class="main has-text-left"><strong>{{ i.title }}</strong></p>
                    <p class="authors has-text-left">{{ i.authors }}</p>
                    <p class="year has-text-left"><i>{{ i.journal }}</i> ({{ i.year }})</p> -->

                <div class="field has-addons">
                  <p class="control">
                    <button class="button" @click="ExpandAbstract(i.title)">
                      {{ i.abstract_label }}
                    </button>
                  </p>
                  <template v-for="link in i.links">
                    <p class="control">
                      <button class="button" @click="GoTo(link.url)">
                        {{ link.name }}
                      </button>
                    </p>
                  </template>
                </div>

                <article class="message" v-if="i.abstract_shown">
                  <div class="message-body">
                    {{ i.abstract }}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: max-content;
  padding-bottom: 0px;
  padding-top: 20px;
}

.card-content {
  padding: 0rem;
  font-size: 1.15rem;
}

.message {
  background-color: var(--background-color);
}

.message-body {
  border-color: var(--medium);
}

.button {
  margin-bottom: 5px;
  margin-left: 2px;
  margin-right: 2px;
  padding: 0.5rem;
  font-size: 0.8rem;
  background-color: var(--light);
  border-color: var(--background-color);
  color: var(--link-color);
}
</style>
