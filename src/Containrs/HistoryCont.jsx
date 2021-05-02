import {History} from '../Components/History'
import {connect} from 'react-redux'
import {Action} from '../Services/Action/Action'

const mapdispatchToProps=(dispatch) =>({
    transactionAdd: data => dispatch(Action(data))
})
const mapStateToProps=(state) =>({

})
export default connect(mapStateToProps,mapdispatchToProps)(History)
// export default History