<template lang='pug'>
  div
    div.row
      div.input-field.col.s8
        input#sample(type='text' v-model='sample')
        label.active(for='sample') Sample
      div.input-field.col.s4
        input#font-size(type='number' v-model='fontSize')
        label.active(for='font-size') Font size

    table.striped.bordered
      thead
        tr
          th Name
          th Sample
      tbody
        tr(v-for='font in fonts')
          td {{ font }}
          td(v-bind:style="{fontSize: fontSize + 'px', fontFamily: font}") {{ sample }}
</template>

<script>
import fontNames from './fontnames'

export default {
  name: 'font-preview',
  data() {
    return {
      sample: '画虎画皮难画骨，知人知面不知心',
      fontSize: 40,
      fonts: fontNames,
    }
  }
}
</script>
