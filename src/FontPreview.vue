<template>
  <div>
    <div class='row'>
      <div class='input-field col s8'>
        <input id='sample' type='text' v-model='sample'>
        <label class='active' for='sample'>Sample</label>
      </div>
      <div class='input-field col s4'>
        <input id='font-size' type='number' v-model='fontSize'>
        <label class='active' for='font-size'>Font size</label>
      </div>
    </div>

    <table class='striped bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Sample</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='font in fonts'>
          <td>{{ font }}</td>
          <td v-bind:style="{fontSize: fontSize + 'px', fontFamily: font}">{{ sample }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import fontNames from './fontnames'

export default {
  name: 'font-preview',
  data() {
    return {
      sample: '你好世界！',
      fontSize: 40,
      fonts: fontNames,
    }
  }
}
</script>
