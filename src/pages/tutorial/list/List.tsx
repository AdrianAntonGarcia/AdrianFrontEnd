import listStyles from './list.module.scss';
import cx from 'classnames';

export const List = () => {
  return (
    <div className={listStyles.details}>
      <div className={listStyles.recentOrders}>
        <div className={listStyles.cardHeader}>
          <h2>Recent Orders</h2>
          <a href="#" className={listStyles.btn}>
            View All
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Payment</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Star Refigerator</td>
              <td>$1200</td>
              <td>paid</td>
              <td>
                <span className={cx(listStyles.status, listStyles.delivered)}>
                  Delivered
                </span>
              </td>
            </tr>
            <tr>
              <td>Star Refigerator</td>
              <td>$1200</td>
              <td>paid</td>
              <td>
                <span className={cx(listStyles.status, listStyles.delivered)}>
                  Delivered
                </span>
              </td>
            </tr>
            <tr>
              <td>Star Refigerator</td>
              <td>$1200</td>
              <td>paid</td>
              <td>
                <span className={cx(listStyles.status, listStyles.delivered)}>
                  Delivered
                </span>
              </td>
            </tr>
            <tr>
              <td>Star Refigerator</td>
              <td>$1200</td>
              <td>paid</td>
              <td>
                <span className={cx(listStyles.status, listStyles.delivered)}>
                  Delivered
                </span>
              </td>
            </tr>
            <tr>
              <td>Star Refigerator</td>
              <td>$1200</td>
              <td>paid</td>
              <td>
                <span className={cx(listStyles.status, listStyles.delivered)}>
                  Delivered
                </span>
              </td>
            </tr>
            <tr>
              <td>Star Refigerator</td>
              <td>$1200</td>
              <td>paid</td>
              <td>
                <span className={cx(listStyles.status, listStyles.delivered)}>
                  Delivered
                </span>
              </td>
            </tr>
            <tr>
              <td>Star Refigerator</td>
              <td>$1200</td>
              <td>paid</td>
              <td>
                <span className={cx(listStyles.status, listStyles.delivered)}>
                  Delivered
                </span>
              </td>
            </tr>
            <tr>
              <td>Star Refigerator</td>
              <td>$1200</td>
              <td>paid</td>
              <td>
                <span className={cx(listStyles.status, listStyles.pending)}>
                  Delivered
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* new customer */}
      <div className={listStyles.recentCustomers}>
        <div className={listStyles.cardHeader}>
          <h2>Recent Customers</h2>
        </div>
        <table>
          <tbody>
            <tr>
              <td width="60px">
                <div className={listStyles.imgBx}>
                  <img src="assets/img.jpg" alt="Customer" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className={listStyles.imgBx}>
                  <img src="assets/img.jpg" alt="Customer" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className={listStyles.imgBx}>
                  <img src="assets/img.jpg" alt="Customer" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className={listStyles.imgBx}>
                  <img src="assets/img.jpg" alt="Customer" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className={listStyles.imgBx}>
                  <img src="assets/img.jpg" alt="Customer" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className={listStyles.imgBx}>
                  <img src="assets/img.jpg" alt="Customer" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
