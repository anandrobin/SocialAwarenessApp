import * as React from "react";
import { useMutation, useNotify, useRedirect, Button } from 'react-admin';

export const ApproveButton = ({ record }) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const [approve, { loading }] = useMutation(
        {
            type: 'update',
            resource: 'posts',
            payload: { id: record.id, data: { isApproved: true } },
        },
        {
            onSuccess: ({ data }) => {
                redirect('/posts');
                notify('post approved');
            },
            onFailure: (error) => notify(`Post approval error: ${error.message}`, { type: 'warning' }),
        }
    );
    return <Button label="Approve" onClick={approve} disabled={loading} />;
};