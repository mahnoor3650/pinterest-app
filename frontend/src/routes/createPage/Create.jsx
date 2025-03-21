import React from 'react'
import Image from '../../components/image/Image'
import "./create.css";
const Create = () => {
  return <div className="createPage">
    <div className="createTop">
        <h1>Create  Pin</h1>
        <button>Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
            <div className="uploadtitle">
              <Image path="/general/upload.svg" alt="upload" />
              </div>
              <div className="uploadInfo">
                We recommend using high-quality .jpg files less than 20 files less than 200 MB.
              </div>
        </div>
        <form className='createForm'>
              <div className="createFormItem">
                <label htmlFor="title">Title</label>
                <input type="text" placeholder='Enter a title' id='title' name='title'/>
              </div>
              <div className="createFormItem">
                <label htmlFor="description">Description</label>
                <textarea role={8} type="text" placeholder='Enter a description' id='description' name='description'/>
              </div>
              <div className="createFormItem">
                <label htmlFor="link">Link</label>
                <input type="text" placeholder='Enter a link' id='link' name='link'/>
              </div>
             <div className="createFormItem">
                <label htmlFor="board">Board</label>
               <select name="board" id="board">
                <option >Choose a board </option>
                <option value="1">Board 2</option>
                <option value="2">Board 3</option>
                <option value="3">Board 3</option>
               </select>
             </div>
             <div className="createFormItem">
              <label htmlFor="tags">Tags topics</label>
              <input type="text" placeholder='Enter tags' id='tags' name='tags'/>
              <small>Don't worry, people won't see your tags</small>
             </div>
           
        </form>
      </div>
    </div>;
}

export default Create
