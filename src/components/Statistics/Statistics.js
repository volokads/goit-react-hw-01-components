import PropTypes from 'prop-types'
import s from './Statistics.module.css'

function Statistic({ stats }) {
    let total = 0
    function newPar() {
        
        stats.map((stat) => {
            if (stat.label) {
            return    total += stat.percentage
            }
          return  total
        })
        return 
    }
    newPar()
        


    return (
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>
        <ul className={s.statList}>
             {stats.map((stat) => {
                return (
                    <li className={s.item} key={stat.id} style={{ backgroundColor: `rgb(${listItemColor()})`}}>
                    <span className={s.label}>{stat.label}</span>
                    <span className={s.percentage}>{stat.percentage}</span>
                    </li>)
            })}
  </ul>
</section>
    )
}

export default Statistic

const listItemColor = () => {
    return `${randomColor()}, ${randomColor()}, ${randomColor()}`
}

const randomColor = () => {
    return Math.floor(Math.random()*255)
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
}