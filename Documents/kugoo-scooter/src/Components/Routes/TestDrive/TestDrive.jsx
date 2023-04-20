import testDrive from "../../../assets/img/testDriveSect.png";
import "./TestDrive.scss";
import scootIcon from "../../../assets/img/scoot-icon.png";
import scootCharge from "../../../assets/img/scootCharge.png";

const TestDrive = () => {
  return (
    <div className="blog container">
      <img className="blog-img" src={testDrive} alt="" />
      <h2 className="blog-header-test">
        Запишитесь на бесплатный тест-драйв электросамокатов
      </h2>
      <div className="testDrive-wrapper-test">
        <button className="testDrive-button">
          <img className="testDrive-button-img" src={scootIcon} alt="" />
          Поймете, какая модель вам подходит
        </button>
        <button className="testDrive-button">
          <img className="testDrive-button-img" src={scootCharge} alt="" />
          Проверите лучшие самокаты в деле
        </button>
      </div>
    </div>
  );
};
export default TestDrive;
