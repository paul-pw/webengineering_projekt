<template>
  <div v-if="hasContent" class="reader">
    <button type="button" @click="readOrStop()">
      <font-awesome-icon
        v-if="!reading"
        icon="fa-solid fa-headphones"
        class="buttonIcon"
      />
      <font-awesome-icon v-else icon="fa-solid fa-stop" class="buttonIcon" />
    </button>
    <!--Show the play pause controlls only when there is actually something to play-->
    <div v-if="reading">
      <button type="button" @click="pausePlayReading()">
        <font-awesome-icon
          v-if="!paused"
          icon="fa-solid fa-pause"
          class="buttonIcon"
        />
        <font-awesome-icon v-else icon="fa-solid fa-play" class="buttonIcon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NextPrev',
  props: {
    textArray: {
      type: Array,
      required: true
    }
  },
  data () {
    const speech = this.textArray.map(line => new SpeechSynthesisUtterance(line))

    const hasContent = speech.length !== 0

    // fire event after the last utterance is read. and reset reading and paused.
    if (hasContent) {
      speech[speech.length - 1].addEventListener('end', (event) => {
        this.paused = false
        this.reading = false
      })
    }

    return {
      hasContent,
      speech,
      paused: false,
      reading: false
    }
  },
  methods: {
    readLines () {
      for (const i in this.speech) {
        speechSynthesis.speak(this.speech[i])
      }
    },
    readOrStop () {
      if (!this.reading) {
        this.readLines()
        this.reading = true
      } else {
        speechSynthesis.cancel()
        this.reading = false
        this.paused = false
      }
    },
    pausePlayReading () {
      if (!this.paused) {
        speechSynthesis.pause()
        this.paused = true
      } else {
        speechSynthesis.resume()
        this.paused = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/colors.scss";

.reader {
  $buttonIcon_size: 15px;
  button, div{
    border: none;
    display: inline-block;
    border-radius: 50%;
  }
  .buttonIcon {
    border-radius: 50%;
    display: block;
    padding: 10px;
    font-size: $buttonIcon_size;
    width: $buttonIcon_size;
    text-align: center;
    text-decoration: none;
    background: colors.$accent;
    color: colors.$text6;
  }
}
</style>
