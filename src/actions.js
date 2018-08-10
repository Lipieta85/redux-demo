import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// Add comment

export function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
};

// Remove comment

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id 
  }
}

// Edit comment

export function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  }
}

// THUMB_UP_COMMENT

export function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

// THUMB_DOWN_COMMENT
  
export function thumbDownComment (commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}
