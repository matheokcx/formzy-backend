import {
  AbilityBuilder,
  createMongoAbility,
  ExtractSubjectType,
  InferSubjects,
  MongoAbility,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { User, UserRole } from './entities/user.entity';
import { Form } from '../form/entities/form.entity';

enum Actions {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}
type Subjects = InferSubjects<typeof Form | typeof User> | 'all';
type AppAbility = MongoAbility<[Actions, Subjects]>;

@Injectable()
class AbilityFactory {
  getUserAbilities(user: User) {
    const { can, build } = new AbilityBuilder(createMongoAbility);

    if (user.role === UserRole.ADMIN) {
      can(Actions.Manage, 'all');
    } else {
      can(Actions.Read, 'all');
    }

    can(Actions.Update, Form, { user: user });
    can(Actions.Delete, Form, { user: user });

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}

export { AbilityFactory, Actions, type AppAbility };
