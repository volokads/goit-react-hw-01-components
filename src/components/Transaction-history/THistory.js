import PropTypes from 'prop-types'
import s from './THistory.module.css'
function Transaction({ items }) {
    return (
        <>
        <table className={s.transactionHistory}>
  <thead className={s.tableHead}>
    <tr className={s.headRow}>
      <th className={s.tableSell}>Type</th>
      <th className={s.tableSell}>Amount</th>
      <th className={s.tableSell}>Currency</th>
    </tr>
  </thead>
    <tbody>
    {items.length > 0 && items.map((item) => {
    return (
    <tr key={item.id} className={s.row}>
      <td className={s.tableSell}>{item.type}</td>
      <td className={s.tableSell}>{item.amount}</td>
      <td className={s.tableSell}>{item.currency}</td>
    </tr>)
    })}
  </tbody>
  </table>
  </>
    )
}
export default Transaction

Transaction.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}