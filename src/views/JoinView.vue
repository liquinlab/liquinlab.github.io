<script setup>
import { reactive, ref } from "vue";

const phdExpand = ref(false);
const ExpandPhd = function () {
  phdExpand.value = !phdExpand.value;
};

const postdocExpand = ref(false);
const ExpandPostdoc = function () {
  postdocExpand.value = !postdocExpand.value;
};

const labmanExpand = ref(false);
const ExpandLabman = function () {
  labmanExpand.value = !labmanExpand.value;
};

const raExpand = ref(false);
const ExpandRa = function () {
  raExpand.value = !raExpand.value;
};
</script>

<template>
  <div class="page">
    <div class="title has-text-center">Join us!</div>
    <div class="block has-text-left is-size-custom">
      Thank you for your interest in joining the lab! This page provides
      information about what we're looking for and how to apply. Click below to
      learn more about opportunities for PhD students, postdocs, and
      undergraduate research assistants.
    </div>
    <div class="block has-text-left is-size-custom">
      You're welcome to contact me (<a href="mailto:emily.liquin@unh.edu"
        >emily.liquin@unh.edu</a
      >) with any questions about the lab or the application process.
    </div>

    <hr />

    <div class="card">
      <header class="card-header is-shadowless" @click="ExpandPhd()">
        <p class="card-header-title is-size-4 has-text-left">Ph.D. students</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div v-if="phdExpand" class="card-content">
        <div class="content">
          <div class="block has-text-left is-size-custom has-text-weight-bold">
            I am no longer reviewing applications for PhD students to start in
            Fall 2026, but I may consider applicants in future application
            cycles.
          </div>
          <div class="block has-text-left is-size-custom">
            I am committed to supporting my PhD mentees in developing their own
            independent research programs. My goal is to help my mentees pursue
            their career goals, whether in research, teaching, industry, or
            elsewhere.
          </div>

          <div class="subtitle has-text-left is-size-4 has-text-weight-bold">
            What we're looking for
          </div>
          <div class="block has-text-left is-size-custom">
            Most importantly, we are looking for people who are curious about
            human cognition, motivated to learn new skills, and excited to
            contribute to a supportive lab community.
          </div>

          <div class="block has-text-left is-size-custom">
            Strong applicants to the lab have high-quality research experience
            and research interests that are a good fit with the lab's
            <router-link to="/about">research program</router-link>. We're
            excited to take our research into new directions, so we're open to a
            wide range of interests within cognitive and developmental
            psychology. However, most projects in our lab have some connection
            to learning, discovery, and/or information search. Being able to
            articulate your research interests (and how they fit with the lab's
            research program) is an important part of your application. You
            should also be able to describe your research experience and how it
            has prepared you for graduate school.
          </div>

          <!-- <div class="content has-text-left is-size-custom">
              Research in our lab draws on a variety of skills. It's helpful if you already have experience with at least some of the following:
              <ul>
                  <li>experiment design</li>
                  <li>web programming (Javascript, HTML, CSS) for developing experiments</li>
                  <li>recruiting and testing human participants</li>
                  <li>working with data and statistics</li>
                  <li>scientific communication</li>
                  <li>organization and project management</li>
              </ul>
              <i>You don't need to have experience with all of these skills to apply!</i> A big part of your PhD is learning new things, and our lab is committed to helping all lab members develop the skills they need to pursue their research interests.
            </div> -->
          <div class="content has-text-left is-size-custom">
            Though it is not required, the most competitive applicants have some
            background in psychology (ideally through coursework and/or
            research). In your application, be sure to highlight relevant
            research experience, coursework, and skills that you believe will
            help you succeed in graduate school.
          </div>
          <div class="block has-text-left is-size-custom">
            Each member of our lab plays an integral role in fostering a
            positive lab culture. We are committed to doing rigorous, replicable
            research, and we promote diversity, equity, inclusion, and belonging
            in our lab, department, and field.
            <router-link to="/about"
              >Learn more about our scientific and community values
              here</router-link
            >.
          </div>

          <div class="subtitle has-text-left is-size-4 has-text-weight-bold">
            How to apply
          </div>
          <div class="block has-text-left is-size-custom">
            I accept applications through the UNH
            <a href="https://cola.unh.edu/psychology" target="_blank"
              >Department of Psychology</a
            >. You can find
            <a
              href="https://cola.unh.edu/psychology/program/phd/psychology"
              target="_blank"
              >application instructions on this page</a
            >. Be sure to indicate your interest in joining the lab in your
            application materials (e.g., in your Personal Statement). Review of
            applications begins January 15 and continues until the incoming
            class is filled.
          </div>

          <div class="block has-text-left is-size-custom">
            If you are accepted and decide to come to UNH, you will be
            guaranteed funding (stipend, tuition remission, and health
            insurance) for 5 years, provided some basic conditions are met. See
            the "Financial Aid" tab at
            <a
              href="https://cola.unh.edu/psychology/program/phd/psychology"
              target="_blank"
              >this page for more information</a
            >.
          </div>

          <div class="subtitle has-text-left is-size-4 has-text-weight-bold">
            Resources for applying to PhD programs
          </div>
          <div class="content has-text-left is-size-custom">
            <ul>
              <li>
                <a
                  href="https://www.psychresearchlist.com/grad-school.html"
                  target="_blank"
                  >Dr. Meltem Yucel's PsychResearchList</a
                >
                (compiled list of resources for applying to graduate school)
              </li>
              <li>
                <a href="https://www.cientificolatino.com/" target="_blank"
                  >Científico Latino</a
                >
                (mentorship program for graduate school applicants from
                minoritized backgrounds; also has many resources, tips, and
                example applications available online)
              </li>
              <li>
                <a href="https://www.asfp.io/" target="_blank"
                  >Application Statement Feedback Program</a
                >
                (program that provides fast, constructive feedback on graduate
                school application statements)
              </li>
              <li>
                <a
                  href="https://www.plasticityinneurodevelopmentlab.com/resourcesforresearchers"
                  target="_blank"
                  >Northeastern PINE Lab's resources</a
                >
                (compiled list of resources for researchers at all career
                stages)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="card">
      <header class="card-header is-shadowless" @click="ExpandPostdoc()">
        <p class="card-header-title is-size-4 has-text-left">Postdocs</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div v-if="postdocExpand" class="card-content">
        <div class="content">
          <div class="block">
            <div class="has-text-left is-size-custom">
              We are not actively recruiting postdocs. However, if you're
              interested in joining the lab as a postdoc and would like to
              submit an application for funding together (e.g.,
              <a
                href="https://www.nsf.gov/funding/opportunities/sprf-sbe-postdoctoral-research-fellowships"
                >NSF SPRF</a
              >
              or
              <a href="https://grants.nih.gov/funding/activity-codes/F32"
                >NIH F32</a
              >), I'm happy to talk—feel free to reach out (<a
                href="mailto:emily.liquin@unh.edu"
                >emily.liquin@unh.edu</a
              >).
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <br> -->

    <!-- <div class="card">
        <header class="card-header  is-shadowless" @click="ExpandLabman()">
          <p class="card-header-title is-size-4  has-text-left">
            Lab managers
          </p>
          <button  class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <div v-if="labmanExpand" class="card-content">
          <div class="content">
            <div class="block">
            <div class="has-text-left is-size-custom">
                We are not currently hiring a lab manager. Check back another time, or reach out to me (<a href="mailto:emily.liquin@unh.edu">emily.liquin@unh.edu</a>) with any questions.
            </div>
          </div>
        </div>
      </div>
      </div>   -->

    <br />

    <div class="card">
      <header class="card-header is-shadowless" @click="ExpandRa()">
        <p class="card-header-title is-size-4 has-text-left">
          Undergraduate students
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div v-if="raExpand" class="card-content">
        <div class="content">
          <div class="block">
            <div class="has-text-left is-size-custom">
              We recruit undergraduate research assistants on a rolling basis as
              spaces open up. Please
              <a href="https://forms.gle/Prikde86ZCHb7yNs9"
                >fill out this form</a
              >
              if you are interested in joining the lab.
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div class="has-text-left is-size-6 is-italic">
      Thank you to Todd Gureckis (NYU) and Judy Fan (Stanford), whose "join us"
      pages inspired the organization and content of this page.
    </div>
  </div>
</template>

<style scoped>
.is-size-custom {
  font-size: 1.15rem;
}

.card-header {
  background-color: var(--light);
}
</style>
