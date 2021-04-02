<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon 
        class="c-sidebar-brand-full" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      />
      <CIcon 
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="navItems"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheSidebar',
  data () {
    return {
      nav,
    }
  },
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    },
    navItems () {
      return [
        {
          _name: 'CSidebarNav',
          _children: this.sidebarNavChildren
        }
      ]
    },
    sidebarNavChildren () {
      return nav.map((menuItem) => {
        if((menuItem.empty && this.getTarget.target) || ( !menuItem.empty && !this.getTarget.target)){
          return false
        }else if( menuItem.empty){
          return {
            _name: menuItem._name,
            name: menuItem.name,
            to: menuItem.to ? menuItem.to : undefined,
            icon: menuItem.icon || 'cil-spreadsheet',
            _class: menuItem._class ? menuItem._class : 'bg-dark text-white',
            target: menuItem.target || undefined
            
          }
        }else{
          return {
            _name: menuItem._name,
            name: menuItem.name,
            to: menuItem.to ? menuItem.to : undefined,
            icon: menuItem.icon || 'cil-spreadsheet',
            _class: menuItem._class ? menuItem._class : 'bg-dark text-white',
            target: menuItem.target || undefined
          }
        }
      })
    },
    ...mapGetters([
      'getTarget'
    ]),
  }
}
</script>
