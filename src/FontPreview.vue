<template>
  <div>
    Sample: <input v-model='sample'>
    Font size: <input type='number' v-model='fontSize'>

    <table class=''>
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
      fontSize: 24,
      fonts: fontNames,
    }
  }
}
</script>

<style>

</style>
