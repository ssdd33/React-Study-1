# Immer
: 복잡한 객체 형태의 상태를 업데이트할때 불변성을 유지하면서 간결한 코드를 작성할 수 있다.
## Usage

### `yarn add immer`  

```js
import produce from 'immer';
const nextState = produce(originalState,draft=>{
 //값 변경
 draft.somewhere.deep.inside = 5;
});
```
