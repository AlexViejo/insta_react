import React from 'react';
import User from './User';

export default function Users() {
    return(
        <div className="right">
            <User
                src="https://avatars.mds.yandex.net/get-pdb/881477/654acb99-c1a9-4c2f-8bf0-217b8dfb03fa/s1200?webp=false"
                alt="man"
                name="Greg" />
            <div className="users__block">
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/881477/654acb99-c1a9-4c2f-8bf0-217b8dfb03fa/s1200?webp=false"
                    alt="man"
                    name="Greg" 
                    min/>
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/881477/654acb99-c1a9-4c2f-8bf0-217b8dfb03fa/s1200?webp=false"
                    alt="man"
                    name="Greg"
                    min />
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/881477/654acb99-c1a9-4c2f-8bf0-217b8dfb03fa/s1200?webp=false"
                    alt="man"
                    name="Greg"
                    min />
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/881477/654acb99-c1a9-4c2f-8bf0-217b8dfb03fa/s1200?webp=false"
                    alt="man"
                    name="Greg"
                    min />
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/881477/654acb99-c1a9-4c2f-8bf0-217b8dfb03fa/s1200?webp=false"
                    alt="man"
                    name="Greg"
                    min />
            </div>
        </div>
    )
}