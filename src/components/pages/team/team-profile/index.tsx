import { useParams } from "react-router";
import { Grid, Text, Title, Avatar, Badge, Stack, Divider } from "@mantine/core";

import styles from "./profile.module.scss";

import SlideIn from "@/components/shared/io/slide-in";
import { teamsData } from "@/components/pages/course/course-teams";

export default function Profile() {
    const params = useParams<{ teamId: string }>();
    const teamId = params.teamId;

    const user = teamsData.find(el => el.slug === teamId);
    if(!user) return null;
    return (
        <section className={styles.profile}>
            <Grid justify="center">
                <Grid.Col 
                    className={styles.profile__col} 
                    span={{base: 12, sm: 4, md: 4, lg: 4, xl: 3}}
                >
                    <SlideIn direction="left">
                        <div className={styles.profile__user}>
                            <Avatar className={styles.profile__user__avatar} color="white" src={user.image} alt={user.name}>
                                {user.name
                                    .split(" ")
                                    .map((n:string) => n[0])
                                    .join("")
                                    .slice(0, 2)
                                    .toUpperCase()
                                }
                            </Avatar>
                        </div>
                    </SlideIn>
                </Grid.Col>

                <Grid.Col span={{base: 12, sm: 7, md: 6, lg: 7, xl: 6}}>
                    <SlideIn direction="right">
                        <Stack>
                            <Title order={2} size="h2">
                                {user.name}
                            </Title>
                            <Badge 
                                radius="xs" 
                                ta="center" 
                                variant="light"
                                fz={10} 
                                className={styles.profile__badge}
                            >
                                {user.role}
                            </Badge>
                            <Divider />
                            {user.description.map(el => (
                                <Text c="gray.7" fz={14} ta="justify">
                                    {el}
                                </Text>
                            ))}
                            {user.publication && (
                                <Text c="gray.7" fz={14} ta="justify">
                                    His publications can he 
                                    accessed via this 
                                    <a href={user.publication} rel="noreferrer" target="_blank">Link</a>
                                </Text>
                            )}
                        </Stack>
                    </SlideIn>
                </Grid.Col>
            </Grid>
        </section>
    )
}
