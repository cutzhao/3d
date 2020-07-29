<template>
  <div>
    <div>
      <router-link to="/echarts">查看echarts</router-link>
    </div>
    <div>
      <router-link to="/ali">查看高德地图</router-link>
    </div>
    <div>
      <router-link to="/three">three 3D</router-link>
    </div>
    <div>
      <el-button @click="getenc()">点我点我快点我</el-button>
    </div>
    <div>
      <inp v-model="hhhh" />
    </div>
    <div>
      {{ hhhh }}
    </div>
  </div>
</template>

<script>
import { throttle } from '@/utils'
import * as property from '@/utils/property'
import inp from './inp'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    inp
  },
  data() {
    return {
      enc: '',
      geteee: null,
      mode: 'zhuan',
      hhhh: 'ssss'
    }
  },
  computed: {
  },
  mounted() {
    this.property()
  }, 
  created() {
    this.geteee = throttle(()=> {
        this.$message('这是一条消息提示')
      }, 3000, 1)
  },
  methods: {
    getenc() {
      this.geteee()
    },
    property() {
      let x = {}
      x['name'] = 'vue'
      property.defc(x, 'name')
      console.log(Object.getOwnPropertyDescriptor(x, 'name'))
      const cart = {
        _wheels: 4,
        get wheels () {
          return this._wheels
        },
        set wheels (value) {
          if (value < this._wheels) {
            throw new Error('数值太小了')
          }
          this._wheels = value
        }
      }
      console.log(cart, '我')
      let acc = {
        ['ddd']:33,
        ['cc'+'ca']:11
      }
      console.log(acc, 'acc')
      // const ze = {
      //   get fot() {},
      //   set fot(x) {}
      // }
      // const descriptor = Object.getOwnPropertyDescriptor(ze, 'fot')
      // console.log(descriptor.get.name, 'get')
      // console.log(descriptor.set.name, 'set')
      console.log(new Function().name, '你')
    }
    // URLEncode(str){
    //   /*********改自qiushuiwuhen(2002-9-16)********/
    //   var ch,pos,val,ret="",strSpecial="!\"#$%&'()*+,/:;<=>?@[\]^`{|}~%";
    //   for(var i=0;i<str.length;i++){
    //     ch=str.charAt(i);
    //     val=str.charCodeAt(i);
    //     if(val>=0x4e00&&val<0x9FA5){
    //       if((pos=GBhz.indexOf(ch))!=-1)
    //         ret+=("%"+(0xB0+parseInt(pos/94)).toString(16)+"%"+(0xA1+pos%94).toString(16)).toUpperCase();
    //     }else if((pos=GBfh.indexOf(ch))!=-1)
    //       ret+=("%"+(0xA1+parseInt(pos/94)).toString(16)+"%"+(0xA1+pos%94).toString(16)).toUpperCase();
    //     else if(strSpecial.indexOf(ch)!=-1)
    //       ret+="%"+val.toString(16);
    //     else if(ch==" ")
    //       ret+="+";
    //     else
    //       ret+=ch;
    //   }
    //   return ret;
    // },
    // URLDecode(enStr){
    //   var deStr="";
    //   var ch,val,h,l;
    //   for(var i=0;i<enStr.length;i++)
    //   if ((ch=enStr.charAt(i))=="%"){
    //     val=parseInt(enStr.substr(i+1,2),16);
    //     if((h=val-0xA1)>=0){
    //       if((l=parseInt(enStr.substr(i+4,2),16)-0xA1)>=0)
    //         if((h-0x0F)>=0)
    //           deStr=deStr+GBhz.charAt((h-0x0F)*94+l);
    //         else
    //           deStr=deStr+GBfh.charAt(h*94+l);
    //       else deStr+=String.fromCharCode([h,l]);
    //       i+=5;
    //     }else{
    //       deStr=deStr+String.fromCharCode(val);
    //       i+=2;
    //     }
    //   }else if(ch=="+")deStr=deStr+" "; 
    //   else deStr=deStr+ch;
    //   return deStr;
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
