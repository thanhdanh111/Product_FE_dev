import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Layout() {
	const { enqueueSnackbar } = useSnackbar();
	const notifications = useSelector((state) => state.notificationReducer);
	useEffect(() => {
		if (!notifications || !notifications?.message || !notifications?.variant) {
			return;
		}

		enqueueSnackbar(notifications.message, { variant: notifications.variant });
	}, [notifications]);
	return <></>;
}
