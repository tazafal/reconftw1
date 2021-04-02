<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo"/>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <label for="Target" class="h5 pl-2 mr-3">Target </label>
      <select v-if="targets.length" class="select form-control" @change="sendTarget($event.target.value)" name="Target">
        <option value=""> -Select Target- </option>
        <option v-for="target in targets" :value="target" :selected="getTarget && getTarget.name == target">{{ target }}</option>
      </select>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-bell"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-list"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-envelope-open"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import Targets from '../../targets.json'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  },
  created(){

  },
  data () {
    return {
      targets: Targets.targets,
    }
  },
  methods:{
    ...mapActions([
      'setTarget'
    ]),
    sendTarget(valor){
      this.setTarget(valor)
      console.log(this.getTarget.target)
    }
  },
  computed: {
    ...mapGetters([
                'getTarget'
            ]),
  }
}
</script>
