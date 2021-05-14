<template>
  <div>
    <CCard>
      <CCardBody>
        <CRow>
          <div class="col-sm-12 col-md-6 col-xl-4" v-for="target in targets">
            <div @click="setTarget(target)">{{ target }}</div>
          </div>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import Targets from '../../targets.json'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    Targets
  },
  data () {
    return {
      targets: Targets.targets
    }
  },
  methods: {
    ...mapActions([
      'setTarget'
    ]),
  }
}
</script>
