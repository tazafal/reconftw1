<template>
  <div>
    <CCard>
      <CCardBody>
        <CRow>
          <div class="col-sm-12 col-md-6 col-xl-4 m-1" v-for="target in targets">
            <button type="button" v-clipboard:copy="target" class="btn btn-outline-info mr-2"><CIcon name="cil-clipboard"></CIcon></button>
            <a href="target" target="_blank">{{ target }}</a>
          </div>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Targets from '../../../targets.json'

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

  }
}
</script>
