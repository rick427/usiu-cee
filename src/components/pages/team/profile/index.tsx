import { useParams } from "react-router";
import { Grid, Text, Title, Avatar, Badge, Stack, Divider } from "@mantine/core";

import styles from "./profile.module.scss";

import SlideIn from "@/components/shared/io/slide-in";
import { teamsData } from "@/components/pages/course/teams";

export default function Profile() {
    const params = useParams<{ teamId: string }>();
    const teamId = params.teamId;

    const user = teamsData.find(el => el.slug === teamId);
    if(!user) return null;
    return (
        <section className={styles.profile}>
            <Grid justify="center">
                <Grid.Col span={{base: 12, md: 4, lg: 3}}>
                    <SlideIn direction="left">
                        <div className={styles.profile__user}>
                            <Avatar size={220} color="white" src={user.image} alt={user.name}>
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

                <Grid.Col span={{base: 12, md: 6, lg: 6}}>
                    <SlideIn direction="right">
                        <Stack>
                            <Title size="h2">{user.name}</Title>
                            <Badge 
                                radius="xs" 
                                ta="center" 
                                variant="light"
                                fz={10} 
                            >
                                {user.role}
                            </Badge>
                            <Divider />
                            {user.description.map(el => (
                                <Text c="gray.7" fz={14} ta="justify">
                                    {el}
                                </Text>
                            ))}
                        </Stack>
                    </SlideIn>
                </Grid.Col>
            </Grid>
        </section>
    )
}
