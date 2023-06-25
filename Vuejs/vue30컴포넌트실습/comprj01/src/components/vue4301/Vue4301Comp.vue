<style scoped></style>

<template>
  <div id="app">
    <h1>{{ header }}</h1>
    <h2>{{ welcome }}</h2>
    <h3>{{ counter }}</h3>
    <div><input type="checkbox" v-model="callapi" />외부 api 호출</div>
    <button v-on:click="handlerIncrement">더해줘</button>
    <button v-on:click="handlerDecrement">빼줘</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      header: 'Vuex 사용 앱',
      // welcome: 'Hello word store',
      // counter: 0,
      callapi: false,
    };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    ...mapActions('counterStore', {
      dispatchSetCounter: 'setCounter',
    }),

    handlerIncrement(e) {
      console.log(e.target);
      // this.$data.counter = this.$data.counter + 1;
      debugger;
      this.dispatchSetCounter(+1);
    },

    handlerDecrement(e) {
      console.log(e.target);
      //this.$data.counter = this.$data.counter - 1;
      this.dispatchSetCounter(-1);
    },
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
    ...mapGetters('counterStore', ['welcome', 'counter']),
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
