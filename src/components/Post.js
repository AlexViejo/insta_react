import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/881477/654acb99-c1a9-4c2f-8bf0-217b8dfb03fa/s1200?webp=false"
                    alt="man"
                    name="Greg"
                    min/>
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Задача организации, в особенности же дальнейшее развитие различных форм деятельности требует определения и уточнения новых предложений. Для современного мира реализация намеченных плановых заданий требует от нас анализа прогресса профессионального общества.
                </div>
            </div>
        )
    }
}