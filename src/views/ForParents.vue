<script setup>
import { reactive, ref } from "vue";
</script>

<template>
  <div class="page">
    <div class="title has-text-center">For parents</div>
    <div class="content has-text-left is-size-custom">
      We conduct studies with 3- to 10-year-old children, and we are very
      grateful to the participating families who make our research possible! Our
      goal is to better understand how children's ability to learn from their
      environment develops. We hope that this research can be used to inform
      educational practices and improve children's learning in their day-to-day
      lives.
    </div>
    <hr />

    <div class="columns">
      <div class="column is-two-thirds">
        <div class="is-size-4 is-underlined has-text-weight-bold has-text-left">
          Online studies
        </div>

        <div class="content has-text-left is-size-custom">
          If you're interested in having your child participate in one of our
          online studies, you can find us on
          <a href="https://childrenhelpingscience.com/" target="_blank"
            >Children Helping Science</a
          >, a platform that connects developmental psychology researchers with
          families all over the world. Our online studies, are short, fun
          computer games that you can do from your own home computer.
          <br />
          <br />
          <span style="font-size: 1.3rem"
            ><b
              >Online studies can be found here:
              <a
                href="https://childrenhelpingscience.com/studies/elm-lab-unh/"
                target="_blank"
                rel="noopener noreferrer"
                >ELM Lab @ Children Helping Science</a
              >
            </b>
          </span>
        </div>

        <div class="content has-text-left is-size-custom">
          If we don't have any studies available at the moment, we encourage you
          to check back often. We update our studies regularly! You can also
          register for a profile on Children Helping Science and check out the
          studies from other research labs.
        </div>
      </div>
      <div class="column">
        <br />
        <figure class="image">
          <img src="../assets/child_on_computer_adobestock.jpeg" />
        </figure>
      </div>
    </div>

    <hr />

    <div class="columns">
      <div class="column is-one-third">
        <br />
        <figure class="image">
          <img src="../assets/child_play_adobestock.jpeg" />
        </figure>
      </div>
      <div class="column">
        <div class="is-size-4 is-underlined has-text-weight-bold has-text-left">
          In-person studies
        </div>

        <div class="content has-text-left is-size-custom">
          We are currently recruiting participants for in-person studies at the 
          <a href="https://www.seacoastsciencecenter.org/"
          target="_blank"
          >Seacoast Science Center, </a
          > a children's marine science mueseum! 
          Studies will be carried out most weekends from Friday to Sunday. Our researchers are generally present from 10:00 - 2:00,
          and may be recruiting for any number of projects currently under way.
          <br />
          <br />
          Participation is dependent on the completion of a consent form, and is entirely voluntary. You or your child can withdraw at any time with no consequence. 
          Most studies reward the child with interactive elements during testing, and stickers for them to keep afterwards. Studies take between five to ten minutes on average to complete.
          Any further questions can be sent via email, or asked directly to our researchers on site!
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.is-size-custom {
  font-size: 1.15rem;
}

.box {
  background-color: var(--light);
}

.listopapers {
  margin: 0px;
}

ul {
  margin-top: 0px;
}
</style>
