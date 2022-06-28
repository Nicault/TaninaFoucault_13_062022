function EditUserName() {
  return (
    <div>
      <form className="edit-name-content">
        <div className="inputs-section">
          <div className="input-wrapper">
            <input type="text" placeholder="Tony" className="marginSides" />
          </div>
          <div className="input-wrapper">
            <input type="text" placeholder="Jarvis" className="marginSides" />
          </div>
        </div>
        <div className="inputs-section">
          <button className="transaction-button marginSides marginBottom">
            Save
          </button>
          <button className="transaction-button marginSides marginBottom">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditUserName
