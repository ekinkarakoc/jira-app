import "../App.css";

const TaskCreate = () => {
  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyiniz!!</h3>
      <form className="task-form">
        <label className="task-label" htmlFor="baslik">
          Başlık
        </label>
        <input type="text" className="task-input" id="baslik" />
        <label className="task-label" htmlFor="olustur">
          Task Giriniz
        </label>
        <textarea type="text" className="task-input" id="olustur" rows={5} />
        <button className="task-button">Oluştur</button>
      </form>
    </div>
  );
};

export default TaskCreate;
