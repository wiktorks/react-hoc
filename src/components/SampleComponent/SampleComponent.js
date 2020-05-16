import React from 'react';
import './SampleComponent.css';
import withProgressReadingBar from '../../hoc/withProgressReadingBar/withProgressReadingBar';

const SampleComponent = (props) => {
    return (
        <div className="sample">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde voluptates ipsum ullam. Quia consectetur ab ratione labore necessitatibus facere animi illo! Hic reprehenderit ipsam veritatis dicta fuga odio qui?
            Libero excepturi odit tempore quo dolorum distinctio nemo sapiente. Nulla molestiae aliquid iure officiis tenetur sunt ea! Eos id harum, voluptatem nulla voluptatum facilis dolorem culpa atque explicabo illum dolores.
            Veniam sapiente dicta ipsam distinctio voluptas officiis nisi, eligendi similique magnam quo odit quibusdam totam eveniet quasi nostrum perspiciatis rerum consequuntur nam inventore amet maiores perferendis adipisci iure? Quibusdam, atque?
            Atque impedit, magni consequuntur enim incidunt debitis quod, est, obcaecati quasi tempora aperiam cupiditate sequi natus! Et beatae ex, similique debitis at, necessitatibus qui placeat delectus autem mollitia, impedit ipsam?
            Excepturi saepe blanditiis at qui quibusdam, sit, inventore nesciunt, iste alias quia veniam. Quas consequuntur animi eveniet culpa eum provident temporibus adipisci nisi officiis, est esse, doloribus numquam expedita necessitatibus?
            Amet voluptas fugiat a rerum, ad voluptatem iusto modi fugit corporis repellendus delectus unde odit quae accusantium eos autem dolor? Saepe molestias ipsam eos deserunt obcaecati at veniam nisi culpa.
            Doloribus, tempora dicta vel voluptatibus odio, consectetur commodi corporis esse vitae dolore dolorum ex unde modi, labore eos nobis totam. Nobis doloremque temporibus magnam nemo aut dolore sequi voluptas eligendi.
            Itaque animi, praesentium, sunt error sequi asperiores voluptatibus distinctio cupiditate nihil ea sed eaque alias pariatur facere quidem neque aspernatur blanditiis fuga sint, consectetur hic et. Tempore est libero qui.
            Enim, impedit, similique earum hic nemo saepe pariatur placeat ex architecto nihil quidem culpa in quas aut voluptate id? At ex tenetur odio aperiam vitae necessitatibus tempore reprehenderit rerum dolor.
            Fugit cupiditate ullam facilis laboriosam molestias aut vitae rem voluptatem, laborum, praesentium adipisci, temporibus inventore nemo maiores doloribus recusandae eaque libero esse laudantium et omnis tempore! Nisi porro nihil obcaecati!</p>
        </div>
    );
}

export default withProgressReadingBar(SampleComponent);