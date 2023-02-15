import {payments,phishing} from './payment'
import styles from './payment.module.css'

export const Payments = () => {
  return (
    <>
      <div className={styles.payment}>
        <h3>Métodos de pago</h3>
        <div className={styles.imgPayments}>
          {payments.map((payment) => (
            <img src={payment.src} alt={payment.title} key={payment.title} />
          ))}
        </div>
      </div>
      <div className={styles.payment}>
        <h3>Métodos de envío</h3>
        <div className={styles.imgPayments}>
          {phishing.map((phishing) => (
            <img src={phishing.src} alt={phishing.title} key={phishing.title} />
          ))}
        </div>
      </div>
    </>
  );
}
