import React, { Fragment, useContext } from 'react'
import { AuthContext } from '../../../context'

import useModal from '../../../hooks/UI/useModal'
import Modal from './Modal'

export default function OptionsModal({ questionUser, answerUser, onEdit, onDelete,  }) {
  const { state, modalHandler } = useModal()

  const { user } = useContext(AuthContext)

  return (
    <Fragment>
      {user === null ? false : (user.username === questionUser || user.username === answerUser) && <div className="options">
        <span className="pointer bi bi-three-dots" onClick={modalHandler.bind(null, "OPEN")}></span>
        {state.isVisible &&
          <Modal onCloseModal={modalHandler.bind(null, "CLOSE")} title="options">
            <ul className="options-list">
              <li className="pointer x-large--text option-item" onClick={onEdit}>edit</li>
              <li className="pointer x-large--text option-item" onClick={onDelete}>delete</li>
            </ul>
          </Modal>
        }
      </div>}
    </Fragment>
  )
}
