<style scoped>
input:focus {
  background-color: lightskyblue;
  border: 3px solid #555;
}
</style>

<template>
  <div id="app">
    <p>
      ref 사용 예제<br />
      페이지가 로딩되면 myinput1에 포커스를 주시오 <br />
      버튼을 클릭하면 myinput2에 포커스를 주시오 <br />
    </p>
    <div>
      <div>
        <label>myinput1</label>
        <input type="text" ref="myinput1" v-model="message" />
      </div>
      <div>
        {{ message }}
      </div>
    </div>
    <div>
      <label>myinput2</label>
      <input type="text" ref="myinput2" />
    </div>
    <button v-on:click="handlerMyinput1">포커스 이동</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      message: null,
    };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    handlerMyinput1(e) {
      console.log(e.target);
      this.$refs.myinput2.focus();
    },
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    this.$refs.myinput1.focus();
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
