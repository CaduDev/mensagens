import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';

export function* readMessage({ payload }) {

}

export default all([takeLatest('@message/READ_MESSAGE', readMessage)]);
